import { useRef, useEffect } from 'react'

const THRESHOLD = 200
const FPS = 30
const FRAME_MS = 1000 / FPS
const PULSE_PERIOD = 4500
const GRID_SPACING = 90
const GRID_ANGLE = 5 * Math.PI / 180
const DURATIONS = { scatter: 1600, converge: 6000, hold: 1000, dissolve: 6000 }
const NEXT_PHASE = { scatter: 'converge', converge: 'hold', hold: 'dissolve', dissolve: 'converge' }

function getDotCount() {
  const w = window.innerWidth
  if (w < 640) return 30
  if (w < 1024) return 50
  return 80
}

function calcGridHomes(width, height, count) {
  const cx = width / 2
  const cy = height / 2
  const cos = Math.cos(GRID_ANGLE)
  const sin = Math.sin(GRID_ANGLE)
  const cols = Math.ceil(width / GRID_SPACING) + 4
  const rows = Math.ceil(height / GRID_SPACING) + 4
  const positions = []

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const px = (c - cols / 2) * GRID_SPACING
      const py = (r - rows / 2) * GRID_SPACING
      const rx = px * cos - py * sin + cx
      const ry = px * sin + py * cos + cy
      if (rx > -GRID_SPACING && rx < width + GRID_SPACING &&
          ry > -GRID_SPACING && ry < height + GRID_SPACING) {
        positions.push({ x: rx, y: ry })
      }
    }
  }

  for (let i = positions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[positions[i], positions[j]] = [positions[j], positions[i]]
  }

  const homes = []
  for (let i = 0; i < count; i++) {
    const pos = positions[i % positions.length]
    const angle = Math.random() * Math.PI * 2
    const dist = 5 + Math.random() * 10
    homes.push({
      homeX: pos.x + Math.cos(angle) * dist,
      homeY: pos.y + Math.sin(angle) * dist,
    })
  }
  return homes
}

function initDots(width, height, mutedColor, accentColor, count) {
  const homes = calcGridHomes(width, height, count)
  return Array.from({ length: count }, (_, i) => {
    const depth = Math.random()
    const maxSpeed = 0.1 + depth * 0.2
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * maxSpeed
    const isAccent = Math.random() < 0.08
    const x = Math.random() * width
    const y = Math.random() * height
    return {
      x,
      y,
      homeX: homes[i].homeX,
      homeY: homes[i].homeY,
      scatterX: x,
      scatterY: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color: isAccent ? accentColor : mutedColor,
      isAccent,
      depth,
      phase: isAccent ? Math.random() * Math.PI * 2 : 0,
    }
  })
}

export default function BackgroundAnimation() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const cssVars = getComputedStyle(document.documentElement)
    const mutedColor = cssVars.getPropertyValue('--color-text-muted').trim()
    const accentColor = cssVars.getPropertyValue('--color-accent').trim()

    let dots = []
    let rafId
    let lastTs = 0
    let phase = 'scatter'
    let phaseStart = 0

    function setup() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      dots = initDots(canvas.width, canvas.height, mutedColor, accentColor, getDotCount())
      phase = 'scatter'
      phaseStart = 0
    }

    function animate(ts) {
      rafId = requestAnimationFrame(animate)
      if (ts - lastTs < FRAME_MS) return
      lastTs = ts

      if (phaseStart === 0) phaseStart = ts

      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      const elapsed = ts - phaseStart
      if (elapsed >= DURATIONS[phase]) {
        if (phase === 'scatter' || phase === 'dissolve') {
          for (const d of dots) { d.scatterX = d.x; d.scatterY = d.y }
        } else if (phase === 'hold') {
          for (const d of dots) {
            d.scatterX = Math.random() * width
            d.scatterY = Math.random() * height
          }
        }
        phase = NEXT_PHASE[phase]
        phaseStart = ts
      }

      const t = Math.min((ts - phaseStart) / DURATIONS[phase], 1)

      ctx.strokeStyle = mutedColor
      ctx.lineWidth = 1

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          if (Math.abs(dots[i].depth - dots[j].depth) >= 0.3) continue
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < THRESHOLD) {
            ctx.globalAlpha = 0.5 * (1 - d / THRESHOLD)
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      for (const el of dots) {
        const opacity = el.isAccent
          ? 0.7 + 0.3 * Math.sin(ts * (2 * Math.PI / PULSE_PERIOD) + el.phase)
          : 0.3 + el.depth * 0.7
        ctx.globalAlpha = opacity
        ctx.fillStyle = el.color
        ctx.beginPath()
        ctx.arc(el.x, el.y, 1 + el.depth * 2, 0, Math.PI * 2)
        ctx.fill()

        switch (phase) {
          case 'scatter':
            el.x += el.vx
            el.y += el.vy
            if (el.x < 0) el.x = width
            if (el.x > width) el.x = 0
            if (el.y < 0) el.y = height
            if (el.y > height) el.y = 0
            break
          case 'converge': {
            const e = 1 - Math.pow(1 - t, 3)
            el.x = el.scatterX + (el.homeX - el.scatterX) * e
            el.y = el.scatterY + (el.homeY - el.scatterY) * e
            break
          }
          case 'hold':
            el.x = el.homeX + Math.sin(ts * 0.001 + el.homeX) * 0.5
            el.y = el.homeY + Math.cos(ts * 0.0013 + el.homeY) * 0.5
            break
          case 'dissolve': {
            const e = Math.pow(t, 3)
            el.x = el.homeX + (el.scatterX - el.homeX) * e
            el.y = el.homeY + (el.scatterY - el.homeY) * e
            break
          }
        }
      }
    }

    function handleResize() {
      setup()
    }

    setup()
    rafId = requestAnimationFrame(animate)
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="bg-canvas" />
}

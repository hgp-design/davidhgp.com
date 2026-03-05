import { useRef, useEffect } from 'react'

const THRESHOLD = 200
const FPS = 30
const FRAME_MS = 1000 / FPS

function getDotCount() {
  const w = window.innerWidth
  if (w < 640) return 30
  if (w < 1024) return 50
  return 80
}

function initDots(width, height, mutedColor, accentColor, count) {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2
    const speed = Math.random() * 0.3
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      color: Math.random() < 0.08 ? accentColor : mutedColor,
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

    function setup() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      dots = initDots(canvas.width, canvas.height, mutedColor, accentColor, getDotCount())
    }

    function animate(ts) {
      rafId = requestAnimationFrame(animate)
      if (ts - lastTs < FRAME_MS) return
      lastTs = ts

      const { width, height } = canvas
      ctx.clearRect(0, 0, width, height)

      ctx.strokeStyle = mutedColor
      ctx.lineWidth = 1

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < THRESHOLD) {
            ctx.globalAlpha = 0.4 * (1 - d / THRESHOLD)
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      for (const dot of dots) {
        ctx.fillStyle = dot.color
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2)
        ctx.fill()

        dot.x += dot.vx
        dot.y += dot.vy
        if (dot.x < 0) dot.x = width
        if (dot.x > width) dot.x = 0
        if (dot.y < 0) dot.y = height
        if (dot.y > height) dot.y = 0
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

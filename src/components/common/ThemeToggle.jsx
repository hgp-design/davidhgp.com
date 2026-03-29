import { useState, useEffect } from 'react'
import { RiLightbulbFill, RiLightbulbLine } from 'react-icons/ri'
import './ThemeToggle.css'

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark'
  )

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggle() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {theme === 'dark' ? <RiLightbulbLine size={20} /> : <RiLightbulbFill size={20} />}
    </button>
  )
}

export default ThemeToggle

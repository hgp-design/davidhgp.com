import { useState, useEffect, useRef } from 'react'
import { FaDownload, FaChevronDown } from 'react-icons/fa6'
import './DropdownButton.css'

function DropdownItem({ children, href }) {
  return (
    <a
      className="dropdown__item"
      href={href}
      download
      role="menuitem"
    >
      {children}
    </a>
  )
}

function DropdownButton({ label, children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    return () => document.removeEventListener('mousedown', handleOutside)
  }, [])

  useEffect(() => {
    function handleEscape(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="dropdown" ref={ref}>
      <button
        className="dropdown__trigger"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <FaDownload />
        {label}
        <FaChevronDown className={`dropdown__chevron${open ? ' dropdown__chevron--open' : ''}`} />
      </button>
      {open && (
        <div className="dropdown__menu" role="menu">
          {children}
        </div>
      )}
    </div>
  )
}

DropdownButton.Item = DropdownItem

export default DropdownButton

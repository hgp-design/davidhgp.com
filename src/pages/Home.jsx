import { useState, useEffect } from 'react'
import './Home.css'
import BackgroundAnimation from '../components/BackgroundAnimation'
import { FaDownload } from 'react-icons/fa6'

function Home() {
  const [toastVisible, setToastVisible] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('home-active')
    document.body.classList.add('home-active')
    return () => {
      document.documentElement.classList.remove('home-active')
      document.body.classList.remove('home-active')
    }
  }, [])

  function copyEmail() {
    navigator.clipboard.writeText('davidhgpinfo@gmail.com')
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2000)
  }

  function downloadAll() {
    ['/DavidHong_2026_Resume.pdf', '/DavidHong_2026_Folio.pdf'].forEach((href, i) => {
      setTimeout(() => {
        const a = document.createElement('a')
        a.href = href
        a.download = ''
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
      }, i * 150)
    })
  }

  return (
    <>
      <BackgroundAnimation />
      <div className="page">
        <div>
          <h1 className="name">David Hong</h1>
          <p className="tagline">Design leader. Systems builder.</p>
          <div className="actions">
            <button className="btn-primary" onClick={downloadAll}>
              <FaDownload />
              Download Portfolio
            </button>
            <a className="btn-ghost" href="https://linkedin.com/in/guangpyo" target="_blank" rel="noreferrer">See LinkedIn</a>
            <button className="btn-ghost" onClick={copyEmail}>Copy Email</button>
          </div>
        </div>
      </div>
      {toastVisible && <div className="toast">Email copied</div>}
      <footer className="site-status">Under construction. Check back soon.</footer>
    </>
  )
}

export default Home

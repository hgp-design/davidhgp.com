import { useState, useEffect } from 'react'
import './Home.css'
import BackgroundAnimation from '../components/BackgroundAnimation'

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

  function copyEmail(e) {
    e.preventDefault()
    navigator.clipboard.writeText('davidhgpinfo@gmail.com')
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 2000)
  }

  return (
    <>
      <BackgroundAnimation />
      <div className="page">
        <div>
          <h1 className="name">David Hong</h1>
          <p className="tagline">Design leader. Systems builder.</p>
          <div className="links">
            <span data-tooltip="Open LinkedIn Profile">
              <a className="link" href="https://linkedin.com/in/guangpyo">LinkedIn</a>
            </span>
            <span data-tooltip="Copy email: davidhgpinfo@gmail.com">
              <a className="link" href="#" onClick={copyEmail}>Email</a>
            </span>
          </div>
        </div>
      </div>
      {toastVisible && <div className="toast">Email copied</div>}
      <footer className="site-status">Under construction. Check back soon.</footer>
    </>
  )
}

export default Home

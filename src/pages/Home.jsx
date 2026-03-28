import { useState, useEffect } from 'react'
import './Home.css'
import BackgroundAnimation from '../components/BackgroundAnimation'
import DropdownButton from '../components/common/DropdownButton'

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

  return (
    <>
      <BackgroundAnimation />
      <div className="page">
        <div>
          <h1 className="name">David Hong</h1>
          <p className="tagline">Design leader. Systems builder.</p>
          <div className="actions">
            <DropdownButton label="Download">
              <DropdownButton.Item href="/DavidHong_2026_Resume.pdf">Resume</DropdownButton.Item>
              <DropdownButton.Item href="/DavidHong_2026_Folio.pdf">Portfolio</DropdownButton.Item>
            </DropdownButton>
            <a className="btn-ghost" href="https://linkedin.com/in/guangpyo" target="_blank" rel="noreferrer">See LinkedIn</a>
            <button className="btn-ghost" onClick={copyEmail}>Copy Email</button>
          </div>
        </div>
      </div>
      {toastVisible && <div className="toast">Email copied</div>}
      <footer className="site-status">More coming soon.</footer>
    </>
  )
}

export default Home

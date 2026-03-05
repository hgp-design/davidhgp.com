import './App.css'

function App() {
  return (
    <>
      <div className="page">
        <div>
          <h1 className="name">David Hong</h1>
          <p className="tagline">Design leader. Systems builder.</p>
          <div className="links">
            <span data-tooltip="Open LinkedIn Profile">
              <a className="link" href="https://linkedin.com/in/guangpyo">LinkedIn</a>
            </span>
            <span data-tooltip="Copy email: davidhgpinfo@gmail.com">
              <a className="link" href="mailto:davidhgpinfo@gmail.com">Email</a>
            </span>
          </div>
        </div>
      </div>
      <footer className="site-status">Under construction. Check back soon.</footer>
    </>
  )
}

export default App

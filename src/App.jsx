import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudyAIControlSurface from './pages/CaseStudyAIControlSurface'
import ThemeToggle from './components/common/ThemeToggle'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/ai-control-surface" element={<CaseStudyAIControlSurface />} />
      </Routes>
      <ThemeToggle />
    </BrowserRouter>
  )
}

export default App

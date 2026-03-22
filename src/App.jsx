import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CaseStudyAIControlSurface from './pages/CaseStudyAIControlSurface'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/ai-control-surface" element={<CaseStudyAIControlSurface />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

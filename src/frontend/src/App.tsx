import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  return (
    <div className="bg-gradient-to-br from-neutral-950 via-zinc-900 to-neutral-950 text-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App

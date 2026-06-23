import { Routes, Route } from "react-router-dom"
import { useTheme } from "./context/ThemeContext"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"

function App() {
  const { theme } = useTheme()

  const gradient =
    theme === "dark"
      ? "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, transparent 70%), linear-gradient(to bottom right, #0a0a0a, #18181b, #0a0a0a)"
      : "radial-gradient(ellipse at center, rgba(0,0,0,0.02) 0%, transparent 70%), linear-gradient(to bottom right, #fafafa, #ffffff, #fafafa)"

  return (
    <div
      className="min-h-screen text-on-surface"
      style={{ backgroundImage: gradient }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  )
}

export default App

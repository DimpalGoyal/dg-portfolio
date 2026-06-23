import { Routes, Route } from "react-router-dom"
import { useTheme } from "./context/ThemeContext"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {
  const { theme } = useTheme()

  const gradient =
    theme === "dark"
      ? "linear-gradient(to bottom right, #0a0a0a, #18181b, #0a0a0a)"
      : "linear-gradient(to bottom right, #fafafa, #ffffff, #fafafa)"

  return (
    <div
      className="min-h-screen text-on-surface"
      style={{ backgroundImage: gradient }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App

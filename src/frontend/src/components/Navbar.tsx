import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { MoonIcon, SunIcon } from "../icons"

const links = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border-custom">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-on-surface">
          DG
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:bg-on-surface after:transition-all after:duration-300 ${
                pathname === link.to
                  ? "text-on-surface after:w-full"
                  : "text-on-surface-muted hover:text-on-surface after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="text-on-surface-muted hover:text-on-surface transition-colors duration-200 p-1.5"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="text-on-surface-muted hover:text-on-surface transition-colors duration-200 p-1.5"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            className="flex flex-col items-center justify-center w-8 h-8 gap-[5px] group"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[2px] bg-on-surface-muted transition-all duration-300 ${
                open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"
              }`}
            />
            <span
              className={`block h-[2px] bg-on-surface-muted transition-all duration-300 ${
                open ? "opacity-0" : "w-6"
              }`}
            />
            <span
              className={`block h-[2px] bg-on-surface-muted transition-all duration-300 ${
                open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-6"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors duration-200 ${
                pathname === link.to
                  ? "text-on-surface"
                  : "text-on-surface-muted hover:text-on-surface"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

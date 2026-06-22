import { Link, useLocation } from "react-router-dom"
import { useState } from "react"

const links = [
  { to: "/", label: "About" },
  { to: "/projects", label: "Projects" },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-white">
          DG
        </Link>

        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-colors duration-200 after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 ${
                pathname === link.to
                  ? "text-white after:w-full"
                  : "text-neutral-400 hover:text-white after:w-0 hover:after:w-full"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="sm:hidden flex flex-col items-center justify-center w-8 h-8 gap-[5px] group"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] bg-neutral-400 transition-all duration-300 ${
              open ? "w-6 rotate-45 translate-y-[3.5px]" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] bg-neutral-400 transition-all duration-300 ${
              open ? "opacity-0" : "w-6"
            }`}
          />
          <span
            className={`block h-[2px] bg-neutral-400 transition-all duration-300 ${
              open ? "w-6 -rotate-45 -translate-y-[3.5px]" : "w-6"
            }`}
          />
        </button>
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
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
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

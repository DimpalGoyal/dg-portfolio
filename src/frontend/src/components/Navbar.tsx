import { useEffect, useRef, useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { MoonIcon, SunIcon } from "../icons"

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const { theme, toggleTheme } = useTheme()

  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const el = section as HTMLElement
        const sectionTop = el.offsetTop
        const sectionHeight = el.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const idx = links.findIndex((l) => l.href.slice(1) === activeSection)
    const el = linkRefs.current[idx]
    if (el) {
      setIndicator({
        left: el.offsetLeft,
        width: el.offsetWidth,
      })
    }
  }, [activeSection])

  return (
    <nav className="sticky top-3 z-50 mx-4 sm:mx-auto sm:max-w-5xl rounded-2xl shadow-lg bg-surface/80 backdrop-blur-md border border-border-custom">
      <div className="px-4 h-16 flex items-center justify-between">
        <a href="#about" className="text-xl font-bold tracking-tight text-on-surface">
          DG
        </a>

        <div className="hidden sm:flex items-center relative">
          <div
            className="absolute inset-y-0 rounded-lg bg-active-bg transition-all duration-300 pointer-events-none"
            style={{ left: indicator.left, width: indicator.width }}
          />
          <div className="flex items-center gap-6">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                ref={(el) => { linkRefs.current[i] = el }}
                className={`relative z-10 text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-lg ${
                  activeSection === link.href.slice(1)
                    ? "text-active-text"
                    : "text-on-surface-muted hover:bg-on-surface/[0.03] hover:text-on-surface"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="ml-6 text-on-surface-muted hover:text-on-surface transition-colors duration-200 p-1.5"
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
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors duration-200 px-3 py-1.5 rounded-lg ${
                activeSection === link.href.slice(1)
                  ? "bg-active-bg text-active-text"
                  : "text-on-surface-muted hover:bg-on-surface/[0.03] hover:text-on-surface"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

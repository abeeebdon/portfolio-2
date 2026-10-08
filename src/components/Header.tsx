import { FaBars, FaMoon, FaSun } from 'react-icons/fa6'

import { buttons } from './Data'
import type { Theme } from '../hooks/useTheme'

interface HeaderProps {
  handleClick: () => void
  sideBar: boolean
  theme: Theme
  toggleTheme: () => void
}

const Header = ({ handleClick, sideBar, theme, toggleTheme }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      id="header"
      className="fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 p-4 lg:px-[3%] lg:py-4 bg-portfolio-bg/90 backdrop-blur-md border-b border-portfolio-border shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-4xl font-semibold text-portfolio-text"
        >
          Abeeb<span className="text-portfolio-mc">don</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden max-[760px]:hidden md:flex items-center gap-8 text-lg">
          {buttons.map((button) => (
            <a
              key={button.id}
              href={`#${button.id}`}
              className="transition duration-300 text-portfolio-muted hover:text-portfolio-mc"
            >
              {button.text}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            id="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            title={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
            className="w-10 h-10 rounded-full flex items-center justify-center border border-portfolio-border bg-portfolio-surface text-portfolio-text transition-colors hover:border-portfolio-mc hover:text-portfolio-mc"
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleClick}
          className="md:hidden cursor-pointer text-3xl text-portfolio-mc"
        >
          {!sideBar && <FaBars />}
        </div>
      </div>
    </header>
  )
}

export default Header

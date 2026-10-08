import { FaMoon, FaSun, FaXmark } from 'react-icons/fa6'

import type { Theme } from '../hooks/useTheme'
import { buttons } from './Data'

interface SidebarProps {
  setSideBar: (open: boolean) => void
  theme: Theme
  toggleTheme: () => void
}

const Sidebar = ({ setSideBar, theme, toggleTheme }: SidebarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Close sidebar after clicking a link
    setSideBar(false)
  }

  return (
    <aside className="fixed top-0 right-0 w-4/5 max-w-[300px] h-screen z-[9999] bg-portfolio-surface border-l border-portfolio-border shadow-2xl md:hidden">
      <div className="pt-8 p-6 flex items-center justify-between">
        <button
          id="theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          title={
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
          }
          className="w-10 h-10 rounded-full flex items-center justify-center border border-portfolio-border bg-portfolio-bg text-portfolio-text transition-colors hover:border-portfolio-mc hover:text-portfolio-mc"
        >
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
        <FaXmark
          className="text-3xl pt-1 cursor-pointer inline-block text-portfolio-text transition-colors hover:text-portfolio-mc"
          onClick={() => setSideBar(false)}
        />
      </div>
      <div className="flex flex-col mt-8 gap-6 p-8 pl-12">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => scrollToSection(button.id)}
            className="text-portfolio-text text-3xl text-center transition-colors hover:text-portfolio-mc"
          >
            {button.text}
          </button>
        ))}
      </div>
    </aside>
  )
}
export default Sidebar

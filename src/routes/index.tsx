import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

import About from '../components/About'
import Experience from '../components/Experience'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import { useAos } from '../hooks/useAos'
import { useTheme } from '../hooks/useTheme'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [sideBar, setSideBar] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useAos()

  const handleClick = () => setSideBar(true)

  return (
    <main className="min-h-screen bg-portfolio-bg text-portfolio-text">
      {sideBar && (
        <Sidebar
          setSideBar={setSideBar}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      )}

      <Header
        handleClick={handleClick}
        sideBar={sideBar}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <div className="lg:px-[3%] max-w-7xl mx-auto p-4 pt-28">
        <Home />
        <About />
        {/* <Experience /> */}
        <Skills />
        <Projects />
        <Experience />
      </div>
      <Footer />
    </main>
  )
}

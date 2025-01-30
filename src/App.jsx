import { useEffect } from "react"
import "./App.css"
import Navbar from "./Navbar/Navbar"
import Home from "./intro"
import Skills from "./Skills/skills"
import ProjectsSection from "./Projects/Projects"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Experience from "./Work/Work"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Your GSAP animations can go here if needed
    })

    return () => {
      ctx.revert() // This will clean up all GSAP animations when the component unmounts
    }
  }, [])

  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <div className="relative">
        <div className="relative" id="smooth-wrapper">
          <div className="relative" id="smooth-content">
            <Home />
            <Skills />
            <ProjectsSection />
            <Experience />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


import { useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import Navbar from "./Navbar/Navbar"
import Home from "./intro"
import Skills from "./Skills/Skills"
import ProjectsSection from "./Projects/Projects"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Experience from "./Work/Work"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <Router>
      <div className="relative w-full overflow-x-hidden">
        <Navbar />
        <div className="relative">
          <div className="relative" id="smooth-wrapper">
            <div className="relative" id="smooth-content">
              <section id="home">
                <Home />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <ProjectsSection />
              </section>
              <section id="work">
                <Experience />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App


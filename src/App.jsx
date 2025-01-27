import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Landing from './Landing/Landing'
import About from './About/About'
import Home from './intro'
import Skills from './Skills/skills'
import ProjectsSection from './Projects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Experience from './Work/Work'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <ProjectsSection/>
    <Experience/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App

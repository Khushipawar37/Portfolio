import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Landing from './Landing/Landing'
import About from './About/About'
import Home from './intro'
import Skills from './Skills/skills'
import ProjectsSection from './Projects/Projects'

function App() {

  return (
    <>
    <Navbar/>
    <Home/>
    <Skills/>
    <ProjectsSection/>
    </>
  )
}

export default App

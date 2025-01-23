"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import insta from './insta.mp4'
import cc from './cc.mp4'

const projects = [
  {
    title: "careerCompass",
    techStack: ["MERN", "Firebase", "Tailwind", "Botpress"],
    description: "A full-stack web application for managing personal finances.",
    videoUrl: cc,
  },
  {
    title: "Clothify",
    techStack: ["HTML", "CSS", "Javacript"],
    description: "An e-commerce platform with real-time inventory management.",
    videoUrl: "/videos/project2.mp4",
  },
  {
    title: "Instagram Clone",
    techStack: ["React", "Firebase", "Tailwind"],
    description: "A cross-platform mobile app for tracking fitness goals.",
    videoUrl: insta,
  },
  // {
  //   title: "eduForge",
  //   techStack: ["HTML", "CSS", "Javacript"],
  //   description: "A blog platform with advanced content features.",
  //   videoUrl: "/videos/project4.mp4",
  // },
]

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#f2e8cf", "#bc4749", "#bc4749"])

  const textColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#f2e8cf", "#f2e8cf", "#f2e8cf"])

  const accentColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#f2e8cf", "#f2e8cf", "#f2e8cf"])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <motion.section
      ref={sectionRef}
      className="min-h-screen py-16 px-4 md:px-16 overflow-hidden"
      style={{ backgroundColor }}
    >
      <motion.h2
        className="text-6xl md:text-7xl font-['Londrina_Shadow'] text-center mb-[6rem]"
        style={{ color: textColor }}
      >
        My Projects
      </motion.h2>
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            {/* Left side: Project info */}
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <motion.h3 className="text-6xl font-['Kurale'] mb-4" style={{ color: accentColor }}>
                {projects[currentProject].title}
              </motion.h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[currentProject].techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 rounded-full text-lg"
                    style={{ backgroundColor: accentColor, color: backgroundColor }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.p className="font-['Kurale'] text-xl mt-14" style={{ color: textColor }}>
                {projects[currentProject].description}
              </motion.p>
            </div>

            {/* Right side: Project video */}
            <div className="md:w-1/2 relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                <video
                  src={projects[currentProject].videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <div className="text-white font-['Kurale'] text-lg">{projects[currentProject].title}</div>
                  <div className="flex space-x-2">
                    {projects[currentProject].techStack.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-white/20 text-white rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full opacity-20"
                style={{ backgroundColor: accentColor }}
              ></motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20"
                style={{ backgroundColor: accentColor }}
              ></motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-[5rem] space-x-8">
          <motion.button
            onClick={prevProject}
            className="p-2 rounded-full text-black transition-colors"
            style={{ backgroundColor: accentColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextProject}
            className="p-2 rounded-full text-black transition-colors"
            style={{ backgroundColor: accentColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRightIcon className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}


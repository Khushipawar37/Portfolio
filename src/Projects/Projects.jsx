"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

const projects = [
  {
    title: "Project 1",
    techStack: ["React", "Node.js", "MongoDB"],
    description: "A full-stack web application for managing personal finances.",
    videoUrl: "/videos/project1.mp4",
  },
  {
    title: "Project 2",
    techStack: ["Vue.js", "Express", "PostgreSQL"],
    description: "An e-commerce platform with real-time inventory management.",
    videoUrl: "/videos/project2.mp4",
  },
  {
    title: "Project 3",
    techStack: ["React Native", "Firebase", "Redux"],
    description: "A cross-platform mobile app for tracking fitness goals.",
    videoUrl: "/videos/project3.mp4",
  },
  {
    title: "Project 4",
    techStack: ["Next.js", "GraphQL", "Prisma"],
    description: "A blog platform with advanced content management features.",
    videoUrl: "/videos/project4.mp4",
  },
]

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="min-h-screen bg-[#f2e8cf] py-16 px-4 md:px-16">
      <h2 className="text-6xl md:text-7xl font-['Londrina_Shadow'] text-gray-800 text-center mb-[6rem]">My Projects</h2>
      <div className="max-w-6xl mx-auto">
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
              <h3 className="text-5xl font-['Kurale'] text-[#bc4749] mb-4">{projects[currentProject].title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {projects[currentProject].techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#bc4749] text-white rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 font-['Kurale'] text-lg">{projects[currentProject].description}</p>
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
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#bc4749] rounded-full opacity-20"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#bc4749] rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-center mt-[5rem] space-x-4">
          <button
            onClick={prevProject}
            className="p-2 rounded-full bg-[#bc4749] text-white hover:bg-[#a53c3e] transition-colors"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="p-2 rounded-full bg-[#bc4749] text-white hover:bg-[#a53c3e] transition-colors"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}


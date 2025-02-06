
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import insta from './insta.mp4'
import cc from './cc.mp4'
import clothify from './cloth.mp4'
import ac from './ac.mp4'
const projects = [
  {
    title: "careerCompass",
    techStack: ["MERN", "Firebase", "Tailwind", "Botpress"],
    description: "CareerCompass is a comprehensive platform offering detailed, structured roadmaps for various careers, including curated resources, required skills, expert blogs, focus-building strategies, and an AI chatbot for personalized career guidance and exploration.",
    videoUrl: cc,
  },
  {
    title: "Amazon Clone",
    techStack: ["HTML", "CSS", "Javacript"],
    description: "Built a basic Amazon clone to test my ability to replicate a given design with precision. The project helped me refine my frontend skills and improve attention to UI/UX details.",
    videoUrl: ac,
  },
  {
    title: "Clothify",
    techStack: ["HTML", "CSS", "Javacript"],
    description: "Clothify is an e-commerce platform showcasing a wide range of men's and women's attire, with dynamic data management via MongoDB. It features an auto-updating cart and securely stores order details in the database upon checkout.",
    videoUrl: clothify,
  },
  {
    title: "Instagram Clone",
    techStack: ["React", "Firebase", "Tailwind"],
    description: "Instagram Clone is a React-based application replicating Instagram, featuring user profiles dynamically generated with data fetched from Firebase. It includes functionalities for liking posts and adding comments, offering an authentic social media experience.",
    videoUrl: insta,
  },
]

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.2, 1], ["#f2e8cf", "#bc4749", "#bc4749"])

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
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-16 overflow-hidden"
      style={{ backgroundColor }}
    >
      <motion.h2
        className="text-6xl md:text-7xl font-['Londrina_Shadow'] text-center mb-[6rem]"
        style={{ color: textColor }}
      >
        Projects
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
            <div className="w-full  h-[180px] md:h-[280px] lg:h-[280px] object-cover rounded-lg overflow-hidden shadow-2xl">
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


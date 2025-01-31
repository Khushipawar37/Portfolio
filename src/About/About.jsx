"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaGithub,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaLightbulb,
  FaPuzzlePiece,
  FaChartLine,
  FaUsers,
} from "react-icons/fa"
import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si"

const cards = [
  {
    icon: <FaCode className="text-6xl md:text-8xl text-[#bc4749]" />,
    title: "Coding Enthusiast",
    description: "Transforming ideas into efficient, impactful solutions",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaLightbulb className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Problem Solving</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaPuzzlePiece className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Algorithm Design</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaCode className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Clean Code</span>
        </div>
      </div>
    ),
  },
  {
    icon: <FaLaptopCode className="text-6xl md:text-8xl text-[#bc4749]" />,
    title: "Full-Stack Developer",
    description: "Crafting seamless, responsive web experiences",
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <SiMongodb className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">MongoDB</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <SiExpress className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Express</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaReact className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">React</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaNodeJs className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Node.js</span>
        </div>
      </div>
    ),
  },
  {
    icon: <FaBrain className="text-6xl md:text-8xl text-[#bc4749]" />,
    title: "Analytical Thinker",
    description: "Solving complex problems with innovative approaches",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaBrain className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Critical Thinking</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaPuzzlePiece className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Pattern Recognition</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaChartLine className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Logical Reasoning</span>
        </div>
      </div>
    ),
  },
  {
    icon: <FaGithub className="text-6xl md:text-8xl text-[#bc4749]" />,
    title: "Open Source Contributor",
    description: "Building and sharing knowledge with the community",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaGithub className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Hacktoberfest</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaCode className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">GSSoC</span>
        </div>
        <div className="flex flex-col items-center space-y-2 bg-[#f2e8cf] p-4 rounded-lg shadow-md">
          <FaUsers className="text-[#bc4749] text-3xl" />
          <span className="text-[#bc4749] font-semibold">Social Summer of Code</span>
        </div>
      </div>
    ),
  },
]

const Card = ({ card, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20%" })

  return (
    <motion.div
      ref={ref}
      className="min-h-screen w-full flex items-center justify-center py-16 px-4 bg-[#bc4749]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="max-w-4xl w-full">
        <motion.div
          className="flex flex-col items-center"
          initial={{ y: 50 }}
          animate={isInView ? { y: 0 } : { y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-[#f2e8cf] rounded-full border-4 border-[#f2e8cf] mb-6 shadow-lg">
            {card.icon}
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-[#f2e8cf] text-center font-['Londrina_Shadow']">
            {card.title}
          </h3>
          <p className="text-xl md:text-2xl text-[#f2e8cf] mb-8 text-center font-['Kurale']">{card.description}</p>
          <motion.div
            className="text-[#f2e8cf] w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
          >
            {card.content}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const handleDownload = () => {
    const resumeUrl = "../Resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Khushi_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div ref={containerRef}>
      <motion.div
        className="min-h-screen flex items-center justify-center sticky top-0 bg-[#f2e8cf] z-10"
        style={{
          opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]),
          scale: useTransform(smoothProgress, [0, 0.2], [1, 0.8]),
        }}
      >
        <h2 className="text-6xl md:text-7xl lg:text-8xl text-gray-800 font-bold text-center py-10 px-4 font-['Londrina_Shadow']">
          About Me
        </h2>
      </motion.div>

      {cards.map((card, index) => (
        <Card key={index} card={card} index={index} />
      ))}

      <motion.div
        className="min-h-screen flex items-center justify-center py-16 px-4 bg-[#bc4749]"
        style={{
          opacity: useTransform(smoothProgress, [0.8, 1], [0, 1]),
        }}
      >
        <div className="max-w-3xl w-full p-8 md:p-12 rounded-lg bg-[#f2e8cf] shadow-2xl">
          <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-['Kurale']">
            With a strong foundation in both front-end and back-end technologies, I specialize in building robust,
            scalable applications that not only meet but exceed client expectations. My approach combines technical
            expertise with creative problem-solving, ensuring that every project I undertake is both innovative and
            impactful.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <FaReact className="text-4xl text-[#bc4749]" />
            <FaNodeJs className="text-4xl text-[#bc4749]" />
            <SiMongodb className="text-4xl text-[#bc4749]" />
            <SiExpress className="text-4xl text-[#bc4749]" />
            <SiFirebase className="text-4xl text-[#bc4749]" />
          </div>
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 text-xl font-medium rounded-lg text-[#f2e8cf] bg-[#bc4749] hover:bg-[#a53e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bc4749] transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}


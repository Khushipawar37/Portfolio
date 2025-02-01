import { useEffect, useRef, useState } from "react"
import React from 'react';
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

const About = () => {
  const scrollContainerRef = useRef(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    let isScrolling = false

    const handleWheel = (e) => {
      e.preventDefault()

      if (isScrolling) return

      isScrolling = true
      const direction = e.deltaY > 0 ? 1 : -1
      const totalCards = cards.length + 2 

      setCurrentCardIndex((prevIndex) => {
        const newIndex = Math.max(0, Math.min(prevIndex + direction, totalCards - 1))
        scrollContainer.scrollTo({
          left: newIndex * scrollContainer.clientWidth,
          behavior: "smooth",
        })
        return newIndex
      })

      setTimeout(() => {
        isScrolling = false
      }, 1000)
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel)
    }
  }, [])

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
    <div className="overflow-hidden">
      <div ref={scrollContainerRef} className="flex overflow-x-hidden">
        <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-[#f2e8cf]">
          <h2 className="text-6xl md:text-7xl lg:text-8xl text-gray-800 font-bold text-center py-10 px-4 font-['Londrina_Shadow']">
            About Me
          </h2>
        </section>

        {cards.map((card, index) => {
          const isEven = index % 2 === 0
          const bgColor = isEven ? "bg-[#bc4749]" : "bg-[#f2e8cf]"
          const textColor = isEven ? "text-[#f2e8cf]" : "text-[#bc4749]"
          const iconBgColor = isEven ? "bg-[#f2e8cf]" : "bg-[#bc4749]"
          const iconColor = isEven ? "text-[#bc4749]" : "text-[#f2e8cf]"

          return (
            <section
              key={index}
              className={`w-screen h-screen flex-shrink-0 flex items-center justify-center ${bgColor} px-4`}
            >
              <div className="max-w-5xl w-full">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center ${iconBgColor} rounded-full border-4 ${isEven ? "border-[#f2e8cf]" : "border-[#bc4749]"} mb-6 shadow-lg`}
                  >
                    {React.cloneElement(card.icon, { className: `text-6xl md:text-8xl ${iconColor}` })}
                  </div>
                  <h3
                    className={`text-4xl md:text-5xl font-bold mb-4 ${textColor} text-center font-['Londrina_Shadow']`}
                  >
                    {card.title}
                  </h3>
                  <p className={`text-xl md:text-2xl ${textColor} mb-8 text-center font-['Kurale']`}>
                    {card.description}
                  </p>
                  <div className={`${textColor} w-full`}>
                    {React.cloneElement(card.content, {
                      className: card.content.props.className
                        ? card.content.props.className
                            .replace("bg-[#f2e8cf]", isEven ? "bg-[#f2e8cf]" : "bg-[#bc4749]")
                            .replace("text-[#bc4749]", isEven ? "text-[#bc4749]" : "text-[#f2e8cf]")
                        : "",
                    })}
                  </div>
                </div>
              </div>
            </section>
          )
        })}

        <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-[#bc4749] px-4">
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
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-8 py-4 text-xl font-medium rounded-lg text-[#f2e8cf] bg-[#bc4749] hover:bg-[#a53e40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bc4749] transition-all duration-300 shadow-lg"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About


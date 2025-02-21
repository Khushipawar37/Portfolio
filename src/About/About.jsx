import { useEffect, useRef, useState } from "react"
import React from "react"
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
  FaUsers,
  FaHackerrank,
  FaBook,
  FaChevronRight,
  FaRocket,
  FaCoffee,
  FaGraduationCap,
} from "react-icons/fa"
import { SiMongodb, SiExpress, SiFirebase } from "react-icons/si"

const cards = [
  {
    icon: <FaCode className="text-6xl md:text-8xl text-[#bc4749]" />,
    title: "Coding Enthusiast",
    description: "Transforming ideas into efficient, impactful solutions",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#bc4749] p-6 rounded-lg shadow-md">
          <h4 className="text-[#f2e8cf] text-xl font-semibold mb-3">Problem Solving</h4>
          <p className="text-[#f2e8cf]">
            Tackling complex challenges with innovative approaches and elegant solutions.
          </p>
        </div>
        <div className="flex flex-col justify-between bg-[#bc4749] p-6 rounded-lg shadow-md">
          <div>
            <h4 className="text-[#f2e8cf] text-xl font-semibold mb-3">Clean Code</h4>
            <p className="text-[#f2e8cf]">Writing maintainable, efficient, and well-documented code.</p>
          </div>
          <div className="flex justify-end mt-4">
            <FaLightbulb className="text-[#f2e8cf] text-3xl" />
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <FaLaptopCode className="text-6xl md:text-8xl text-[#f2e8cf]" />,
    title: "Full-Stack Developer",
    description: "Crafting seamless, responsive web experiences",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-[#f2e8cf] p-6 rounded-lg shadow-md">
          <h4 className="text-[#bc4749] text-xl font-semibold mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">Express</span>
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">React</span>
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">Firebase</span>
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">HTML</span>
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">CSS</span>
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">Javascript</span>
            <span className="bg-[#bc4749] text-[#f2e8cf] px-3 py-1 rounded-full">Tailwind</span>
          </div>
        </div>
        <div className="bg-[#f2e8cf] p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h4 className="text-[#bc4749] text-xl font-semibold mb-3">End-to-End Solutions</h4>
          <p className="text-[#bc4749]">From database to UI, creating comprehensive web applications.</p>
          <div className="flex justify-end mt-4">
            <FaRocket className="text-[#bc4749] text-3xl" />
          </div>
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
        <div className="bg-[#bc4749] p-6 rounded-lg shadow-md">
          <h4 className="text-[#f2e8cf] text-xl font-semibold mb-3">Critical Thinking</h4>
          <p className="text-[#f2e8cf]">Analyzing problems from multiple angles to find optimal solutions.</p>
        </div>
        <div className="bg-[#bc4749] p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h4 className="text-[#f2e8cf] text-xl font-semibold mb-3">Pattern Recognition</h4>
          <p className="text-[#f2e8cf]">Identifying trends and patterns to optimize processes and code.</p>
          <div className="flex justify-end mt-4">
          </div>
        </div>
        <div className="bg-[#bc4749] p-6 rounded-lg shadow-md">
          <h4 className="text-[#f2e8cf] text-xl font-semibold mb-3">Logical Reasoning</h4>
          <p className="text-[#f2e8cf]">Applying structured thinking to break down complex problems.</p>
        </div>
      </div>
    ),
  },
  {
    icon: <FaGithub className="text-6xl md:text-8xl text-[#f2e8cf]" />,
    title: "Open Source Contributor",
    description: "Building and sharing knowledge with the community",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#f2e8cf] p-6 rounded-lg shadow-md">
          <h4 className="text-[#bc4749] text-xl font-semibold mb-3">Contributions</h4>
          <ul className="list-disc list-inside text-[#bc4749]">
            <li>Hacktoberfest participant</li>
            <li>GSSoC contributor</li>
            <li>Social Summer of Code mentor</li>
          </ul>
        </div>
        <div className="bg-[#f2e8cf] p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h4 className="text-[#bc4749] text-xl font-semibold mb-3">Community Impact</h4>
          <p className="text-[#bc4749]">Sharing knowledge and collaborating with developers worldwide.</p>
          <div className="flex justify-end mt-4">
            <FaUsers className="text-[#bc4749] text-3xl" />
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <FaHackerrank className="text-6xl md:text-8xl text-[#bc4749]" />,
    title: "Hackathon Enthusiast",
    description: "Gaining hands-on experience through competitive coding",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-[#bc4749] p-6 rounded-lg shadow-md">
          <h4 className="text-[#f2e8cf] text-xl font-semibold mb-3">Hackathon Achievements</h4>
          <p className="text-[#f2e8cf] mb-4">Participated in multiple hackathons, honing skills in:</p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-[#f2e8cf] text-[#bc4749] px-3 py-1 rounded-full">Rapid Prototyping</span>
            <span className="bg-[#f2e8cf] text-[#bc4749] px-3 py-1 rounded-full">Team Collaboration</span>
            <span className="bg-[#f2e8cf] text-[#bc4749] px-3 py-1 rounded-full">Innovative Solutions</span>
          </div>
        </div>
        <div className="bg-[#bc4749] p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h4 className="text-[#f2e8cf] text-xl font-semibold mb-3">Learning Through Competition</h4>
          <p className="text-[#f2e8cf]">
            Thriving under pressure and delivering results in time-constrained environments.
          </p>
          <div className="flex justify-end mt-4">
            <FaCoffee className="text-[#f2e8cf] text-3xl" />
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: <FaBook className="text-6xl md:text-8xl text-[#f2e8cf]" />,
    title: "Passionate Learner",
    description: "Keeping up with new tech trends and best practices",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#f2e8cf] p-6 rounded-lg shadow-md">
          <h4 className="text-[#bc4749] text-xl font-semibold mb-3">Continuous Learning</h4>
          <p className="text-[#bc4749]">
            Always exploring new technologies and methodologies to stay ahead in the field.
          </p>
        </div>
        <div className="bg-[#f2e8cf] p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h4 className="text-[#bc4749] text-xl font-semibold mb-3">Adaptability</h4>
          <p className="text-[#bc4749]">Quickly adapting to new tools and frameworks as the industry evolves.</p>
          <div className="flex justify-end mt-4">
            <FaGraduationCap className="text-[#bc4749] text-3xl" />
          </div>
        </div>
        <div className="bg-[#f2e8cf] p-6 rounded-lg shadow-md">
          <h4 className="text-[#bc4749] text-xl font-semibold mb-3">Growth Mindset</h4>
          <p className="text-[#bc4749]">Embracing challenges as opportunities for personal and professional growth.</p>
        </div>
      </div>
    ),
  },
]

const About = () => {
  const scrollContainerRef = useRef(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isAboutVisible, setIsAboutVisible] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    let isScrolling = false

    const handleWheel = (e) => {
      if (!isAboutVisible) return
      e.preventDefault()

      if (isScrolling) return

      isScrolling = true
      const direction = e.deltaY > 0 ? 1 : -1
      const totalSections = cards.length + 2 

      setCurrentSection((prevSection) => {
        let newSection = prevSection + direction

        if (newSection < 0) {
          window.scrollTo({
            top: window.scrollY - window.innerHeight,
            behavior: "smooth",
          })
          newSection = 0
        } else if (newSection >= totalSections) {
          window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: "smooth",
          })
          newSection = totalSections - 1
        } else {
          scrollContainer.scrollTo({
            left: newSection * scrollContainer.clientWidth,
            behavior: "smooth",
          })
        }

        return newSection
      })

      setTimeout(() => {
        isScrolling = false
      }, 1000)
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutVisible(entry.isIntersecting && entry.intersectionRatio >= 0.5)
      },
      { threshold: 0.5 },
    )

    observer.observe(scrollContainer)

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel)
      observer.disconnect()
    }
  }, [isAboutVisible])

  const handleDownload = () => {
    const resumeUrl = "../Resume.pdf"
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Khushi_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleExploreClick = () => {
    const scrollContainer = scrollContainerRef.current
    scrollContainer.scrollTo({
      left: scrollContainer.clientWidth,
      behavior: "smooth",
    })
    setCurrentSection(1)
  }

  return (
    <div className="overflow-hidden">
      <div ref={scrollContainerRef} className="flex overflow-x-hidden snap-x snap-mandatory">
        <section className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center bg-[#bc4749] snap-start">
          <h2 className="text-6xl md:text-7xl lg:text-8xl text-[#f2e8cf] font-bold text-center py-10 px-4 font-['Londrina_Shadow']">
            About Me
          </h2>
          <button
            onClick={handleExploreClick}
            className="mt-8 group flex items-center space-x-2 text-[#f2e8cf] hover:text-[#f2e8cf] transition-colors duration-300 focus:outline-none"
            aria-label="Discover my expertise"
          >
            <span className="text-xl font-semibold font-['Kurale']">Discover my expertise</span>
            <div className="relative w-8 h-8 rounded-full bg-[#f2e8cf] group-hover:bg-[#d9c8b0] transition-colors duration-300">
              <FaChevronRight className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-[#bc4749]" />
            </div>
          </button>
        </section>

        {cards.map((card, index) => {
          const isEven = index % 2 === 0
          const bgColor = isEven ? "bg-[#f2e8cf]" : "bg-[#bc4749]"
          const textColor = isEven ? "text-[#bc4749]" : "text-[#f2e8cf]"
          const iconBgColor = isEven ? "bg-[#bc4749]" : "bg-[#f2e8cf]"
          const iconColor = isEven ? "text-[#f2e8cf]" : "text-[#bc4749]"

          return (
            <section
              key={index}
              className={`w-screen h-screen flex-shrink-0 flex items-center justify-center ${bgColor} px-4 snap-start`}
            >
              <div className="max-w-5xl w-full">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-24 h-24 md:w-32 md:h-32 flex items-center justify-center ${iconBgColor} rounded-full border-4 ${isEven ? "border-[#bc4749]" : "border-[#f2e8cf]"} mb-6 shadow-lg`}
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
                  <div className={`${textColor} w-full`}>{card.content}</div>
                </div>
              </div>
            </section>
          )
        })}
        <section className="w-screen h-screen flex-shrink-0 flex items-center justify-center bg-[#bc4749] px-4 snap-start">
          <div className="max-w-6xl w-full p-8 md:p-12 rounded-lg bg-[#f2e8cf] shadow-2xl">
            <p className="text-xl md:text-2xl text-gray-800 mb-8 leading-relaxed font-['Kurale']">
            Passionate web developer with hands-on experience building responsive and user-friendly applications, always striving to create seamless digital experiences with a strong focus on UI/UX. Continuously enhancing my problem-solving skills through challenging projects and algorithmic problem-solving, refining my approach to complex technical challenges. A dedicated learner who loves exploring new technologies, participating in hackathons, and collaborating with like-minded individuals to exchange ideas and improve through mentorship and feedback.
            </p>
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


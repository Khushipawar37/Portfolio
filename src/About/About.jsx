'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaCode, FaLaptopCode, FaBrain, FaHackerrank, FaGithub, FaDownload } from 'react-icons/fa'

export default function About() {
  const containerRef = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const handleDownload = () => {
    const resumeUrl = '/path-to-your-resume.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Khushi_Pawar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const cards = [
    {
      icon: <FaCode className="text-6xl md:text-8xl text-white" />,
      title: "Coding Enthusiast",
      description: "Transforming ideas into elegant, efficient code is not just my profession—it's my passion.",
    },
    {
      icon: <FaLaptopCode className="text-6xl md:text-8xl text-white" />,
      title: "Web Development Guru",
      description: "Specializing in creating seamless, user-centric web applications that leave a lasting impression.",
    },
    {
      icon: <FaBrain className="text-6xl md:text-8xl text-white" />,
      title: "Algorithm Aficionado",
      description: "Committed to daily practice of data structures and algorithms to sharpen my problem-solving skills.",
    },
    {
      icon: <FaHackerrank className="text-6xl md:text-8xl text-white" />,
      title: "Hackathon Hero",
      description: "Active participant in hackathons, turning innovative ideas into reality under pressure.",
    },
    {
      icon: <FaGithub className="text-6xl md:text-8xl text-white" />,
      title: "Open Source Contributor",
      description: "Passionate about giving back to the community through open source contributions.",
    }
  ]

  return (
    <section 
      ref={containerRef}
      className="relative bg-gradient-to-b from-[#f2e8cf] to-[#bc4749]"
      style={{ height: `${(cards.length + 1) * 120}vh` }}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl text-gray-800 font-['Londrina_Shadow'] text-center py-20 sticky top-0 z-10 bg-gradient-to-b from-[#f2e8cf] to-transparent"
      >
        About Me
      </motion.h2>

      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="relative h-full">
          {cards.map((card, index) => {
            const start = index / cards.length
            const end = (index + 1) / cards.length

            const x = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              ['100%', '0%', '-100%']
            )

            const opacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 1, 0]
            )

            return (
              <motion.div
                key={index}
                style={{ x, opacity }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-16"
              >
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
                  <div className="w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                      {card.title}
                    </h3>
                    <p className="text-xl md:text-2xl text-white/90">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <motion.div
        style={{
          opacity: useTransform(
            scrollYProgress,
            [0.8, 1],
            [0, 1]
          ),
          y: useTransform(
            scrollYProgress,
            [0.8, 1],
            ['100%', '0%']
          )
        }}
        className="sticky top-0 h-screen flex items-center justify-center text-center px-16"
      >
        <div>
          <p className="text-2xl text-white mb-8 max-w-4xl mx-auto">
            With a strong foundation in both front-end and back-end technologies, I specialize in building robust, scalable applications that not only meet but exceed client expectations. My approach combines technical expertise with creative problem-solving, ensuring that every project I undertake is both innovative and impactful.
          </p>
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 text-xl border-2 border-white font-medium rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}


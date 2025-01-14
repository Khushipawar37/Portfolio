'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaBrain, FaHackerrank, FaGithub, FaDownload } from 'react-icons/fa'

export default function About() {
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
      icon: FaCode,
      title: "Coding Enthusiast",
      description: "Transforming ideas into elegant, efficient code is not just my profession—it's my passion.",
      bgColor: "from-orange-100 to-orange-200"
    },
    {
      icon: FaLaptopCode,
      title: "Web Development Guru",
      description: "Specializing in creating seamless, user-centric web applications that leave a lasting impression.",
      bgColor: "from-blue-100 to-blue-200"
    },
    {
      icon: FaBrain,
      title: "Algorithm Aficionado",
      description: "Committed to daily practice of data structures and algorithms to sharpen my problem-solving skills.",
      bgColor: "from-purple-100 to-purple-200"
    },
    {
      icon: FaHackerrank,
      title: "Hackathon Hero",
      description: "Active participant in hackathons, turning innovative ideas into reality under pressure.",
      bgColor: "from-green-100 to-green-200"
    },
    {
      icon: FaGithub,
      title: "Open Source Contributor",
      description: "Passionate about giving back to the community through open source contributions.",
      bgColor: "from-pink-100 to-pink-200"
    }
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f2e8cf] to-[#bc4749] py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-6xl md:text-8xl text-gray-800 font-['Londrina_Shadow'] text-center mb-20"
        >
          About Me
        </motion.h2>

        <div className="space-y-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ 
                x: 0, 
                opacity: 1,
                transition: { 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }
              }}
              viewport={{ once: true, margin: "-100px" }}
              className={`
                w-full rounded-xl overflow-hidden
                bg-gradient-to-r ${card.bgColor}
                shadow-lg hover:shadow-xl transition-shadow duration-300
              `}
            >
              <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
                <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center rounded-full bg-white shadow-inner">
                  <card.icon className="text-4xl md:text-6xl text-[#bc4749]" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
            With a strong foundation in both front-end and back-end technologies, I specialize in building robust, scalable applications that not only meet but exceed client expectations. My approach combines technical expertise with creative problem-solving, ensuring that every project I undertake is both innovative and impactful.
          </p>
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 text-lg border border-transparent font-medium rounded-lg shadow-sm text-white bg-[#bc4749] hover:bg-[#a53f41] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bc4749] transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}


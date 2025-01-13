'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
// import Image from 'next/image'


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

  return (
    <section className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-b from-[#f2e8cf] to-[#bc4749]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-2/3 space-y-6">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl  text-gray-800 font-['Londrina_Shadow']"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-800"
            >
              Full Stack Developer passionate about creating seamless, user-centric web experiences. With a strong foundation in both front-end and back-end technologies, I specialize in building robust, scalable applications that exceed client expectations.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#bc4749] hover:bg-[#a53f41] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bc4749] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="mr-2" />
                Download Resume
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}


import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#bc4749] text-[#f2e8cf] font-['Kurale']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-4xl font-['Londrina_Shadow'] text-[#f2e8cf]">Khushi Pawar</h3>
            <p className="text-lg text-[#f2e8cf] max-w-md">
              Crafting digital experiences with passion and precision. Let's bring your ideas to life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start md:items-end space-y-4"
          >
            <h3 className="text-2xl font-['Londrina_Shadow'] text-[#f2e8cf]">Get in Touch</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f2e8cf] hover:text-white transition-colors duration-300"
              >
                <FaGithub className="w-8 h-8" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f2e8cf] hover:text-white transition-colors duration-300"
              >
                <FaLinkedinIn className="w-8 h-8" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:john.doe@example.com"
                className="text-[#f2e8cf] hover:text-white transition-colors duration-300"
              >
                <MdEmail className="w-8 h-8" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-[#f2e8cf] flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-[#f2e8cf]">&copy; {currentYear} John Doe. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="/privacy" className="text-sm text-[#f2e8cf] hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-[#f2e8cf] hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
      <div className="h-1 bg-gradient-to-r from-[#f2e8cf] via-[#bc4749] to-[#f2e8cf]"></div>
    </footer>
  )
}

export default Footer


"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import dp from "/src/assets/dpp.png"
import FloatingElements from "./Elements"
import BackgroundGradient from "./Background"

export default function Landing() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden bg-[#f2e8cf]">
      {/* Background Elements */}
      <BackgroundGradient />
      <FloatingElements />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen p-2 md:p-[5rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ y }}
          className="text-center md:text-left md:w-1/2 space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-['Londrina_Shadow'] text-gray-800 relative">
            <span className="relative z-10">KHUSHI PAWAR</span>
            <motion.span
              className="absolute -inset-2 bg-[#bc4749]/5 rounded-lg -z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </h1>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="h-px bg-[#bc4749]"
            />
            <p className="text-xl md:text-2xl text-[#bc4749] font-['Kurale']">Crafting Logic, Building Systems</p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="h-px bg-[#bc4749]"
            />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl font-['Kurale'] text-gray-600 max-w-lg"
          >
            Simplifying complexity through thoughtful design and meticulous coding. Building seamless bridges between
            innovative ideas and impactful solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center relative"
        >
          {/* Decorative background elements */}
          <motion.div
            className="absolute -inset-4 bg-[#bc4749]/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Animated outer ring */}
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-[#bc4749]/30"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Static outer white ring */}
            <div className="absolute inset-0 rounded-full bg-black" />

            {/* Inner background circle with gradient */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#bc4749] to-[#923638]" />

            {/* Image container with hover effect */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden bg-[#bc4749]">
              <motion.img
                src={dp}
                alt="Khushi Pawar"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Decorative dots around the image */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#bc4749]/30 rounded-full"
                style={{
                  top: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                  left: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 left-[20%] w-20 h-20 border-2 border-[#bc4749]/20 rounded-lg"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-[15%] w-16 h-16 border-2 border-[#bc4749]/20"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* Dots pattern */}
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(30px,1fr))] grid-rows-[repeat(auto-fill,minmax(30px,1fr))] opacity-[0.15]">
        {Array.from({ length: 200 }).map((_, i) => (
          <div key={i} className="w-[2px] h-[2px] bg-[#bc4749] rounded-full" />
        ))}
      </div>
    </div>
  )
}

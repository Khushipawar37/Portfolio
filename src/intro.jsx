import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Landing from "./Landing/Landing"
import About from "./About/About"

export default function Home() {
  const containerRef = useRef(null)

  // Framer Motion scroll handling for background
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const backgroundColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#f2e8cf", "#f8d7da", "#bc4749"])

  return (
    <>
      <motion.div
        ref={containerRef}
        style={{ backgroundColor }}
        className="min-h-screen transition-colors duration-500"
      >
        <Landing />
      </motion.div>

      <About />
    </>
  )
}


"use client"

import { useEffect, useState } from "react"

export default function BackgroundGradient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(188,71,73,0.15) 0%, rgba(242,232,207,0) 50%)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#f2e8cf] via-transparent to-[#f2e8cf]/80 opacity-60" />
    </div>
  )
}


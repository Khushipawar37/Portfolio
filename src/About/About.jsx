"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaHackerrank,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

export default function About() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleDownload = () => {
    const resumeUrl = "/path-to-your-resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Khushi_Pawar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cards = [
    {
      icon: <FaCode className="text-6xl md:text-8xl text-white" />,
      title: "Coding Enthusiast",
      description:
        "I enjoy transforming ideas into efficient code that solves real-world problems. With a focus on functionality and innovation, I strive to create impactful software solutions while continuously learning and evolving in the field.",
      backgroundImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: <FaLaptopCode className="text-6xl md:text-8xl text-white" />,
      title: "Full-Stack Web Developer",
      description:
        "Passionate about building user-friendly and responsive web applications using the latest technologies. From intuitive designs to seamless functionality, I aim to deliver exceptional user experiences while adhering to best practices.",
      backgroundImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    },
    {
      icon: <FaBrain className="text-6xl md:text-8xl text-white" />,
      title: "Analytical Thinker",
      description:
        "Dedicated to mastering data structures and algorithms to solve complex computational problems efficiently. I focus on enhancing problem-solving skills through consistent practice and real-world application of DSA concepts.",
      backgroundImage:
        "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    },
    {
      icon: <FaHackerrank className="text-6xl md:text-8xl text-white" />,
      title: "Hackathon Innovator",
      description:
        "Actively participating in hackathons to collaborate with peers and turn creative ideas into reality. I enjoy the challenge of working under pressure to develop innovative solutions and explore new technologies.",
      backgroundImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      icon: <FaGithub className="text-6xl md:text-8xl text-white" />,
      title: "Open Source Contributor",
      description:
        "Committed to contributing to open-source projects to support the developer community. Through collaboration, I aim to build impactful tools, gain knowledge, and foster meaningful connections in the tech ecosystem.",
      backgroundImage:
        "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${(cards.length + 1) * 100}vh` }}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-8xl md:text-8xl text-white font-['Londrina_Shadow'] text-center py-20 sticky top-0 z-20 mix-blend-difference"
      >
        About Me
      </motion.h2>

      <div className="sticky top-0 h-screen overflow-hidden">
        {cards.map((card, index) => {
          const start = index / cards.length;
          const end = (index + 1) / cards.length;

          const opacity = useTransform(
            scrollYProgress,
            [start, (start + end) / 2, end],
            [0, 1, 0]
          );

          return (
            <motion.div
              key={index}
              style={{ opacity }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <img
                src={card.backgroundImage || "/placeholder.svg"}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            </motion.div>
          );
        })}

        <div className="absolute top-0 left-0 w-full h-full">
          {cards.map((card, index) => {
            const start = index / cards.length;
            const end = (index + 1) / cards.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 1, 0]
            );

            const x = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              ["100%", "0%", "-100%"]
            );

            return (
              <motion.div
                key={index}
                style={{ opacity, x }}
                className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 md:px-16"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl">
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 flex items-center justify-center bg-black bg-opacity-60 rounded-[1rem] border-[3px] border-white mt-[7rem]">
                    {card.icon}
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 mt-[7rem] md:mb-6 text-[#bc4749] mix-blend-difference">
                      {card.title}
                    </h3>
                    <p className="text-lg md:text-xl lg:text-2xl text-white font-['Kurale']  p-4 rounded-lg">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
          y: useTransform(scrollYProgress, [0.8, 1], ["100%", "15%"]),
        }}
        className="sticky top-0 h-screen flex items-center justify-center text-center px-4 md:px-16 z-10"
      >
        <div className=" p-6 md:p-8 rounded-lg max-w-4xl">
          <p className="text-xl md:text-2xl text-white mb-5 font-['Kurale']">
            With a strong foundation in both front-end and back-end
            technologies, I specialize in building robust, scalable applications
            that not only meet but exceed client expectations. My approach
            combines technical expertise with creative problem-solving, ensuring
            that every project I undertake is both innovative and impactful.
          </p>
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center mt-2 md:mt-8 px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl border-2 border-white font-medium rounded-lg text-black bg-[#bc4749] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

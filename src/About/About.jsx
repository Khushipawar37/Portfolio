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
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaAward,
  FaLightbulb,
  FaPuzzlePiece,
  FaChartLine,
  FaUsers,
  FaSearch,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";

export default function About() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleDownload = () => {
    const resumeUrl = "../Resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Khushi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cards = [
    {
      icon: <FaCode className="text-6xl md:text-8xl text-white" />,
      title: "Coding Enthusiast",
      description: "Transforming ideas into efficient, impactful solutions",
      skills: [
        { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-400" />, level: 90 },
        { name: "Algorithm Design", icon: <FaPuzzlePiece className="text-blue-400" />, level: 85 },
        { name: "Clean Code", icon: <FaCode className="text-green-400" />, level: 95 },
        { name: "Version Control", icon: <FaGithub className="text-gray-400" />, level: 88 },
      ],
      backgroundImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    
    {
      icon: <FaLaptopCode className="text-6xl md:text-8xl text-white" />,
      title: "Full-Stack Developer",
      description: "Crafting seamless, responsive web experiences",
      techStack: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-blue-400" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ],
      backgroundImage:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaBrain className="text-6xl md:text-8xl text-white" />,
      title: "Analytical Thinker",
      description: "Solving complex problems with innovative approaches",
      strengths: [
        { name: "Critical Thinking", icon: <FaBrain className="text-purple-400" /> },
        { name: "Pattern Recognition", icon: <FaPuzzlePiece className="text-blue-400" /> },
        { name: "Logical Reasoning", icon: <FaChartLine className="text-green-400" /> },
        { name: "Attention to Detail", icon: <FaSearch className="text-yellow-400" /> },
      ],
      backgroundImage:
        "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
    },
    {
      icon: <FaGithub className="text-6xl md:text-8xl text-white" />,
      title: "Open Source Contributor",
      description: "Building and sharing knowledge with the community",
      contributions: [
        { name: "Hacktoberfest", description: "Participated in annual event", icon: <FaGithub className="text-orange-500" /> },
        { name: "GSSoC", description: "Contributed to open-source projects", icon: <FaCode className="text-green-500" /> },
        { name: "Social Summer of Code", description: "Engaged in collaborative coding", icon: <FaUsers className="text-blue-500" /> },
      ],
      backgroundImage:
        "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaHackerrank className="text-6xl md:text-8xl text-white" />,
      title: "Hackathon Enthusiast",
      description: "Actively participating and learning in hackathons",
      activities: [
        { name: "Participated in 5+ hackathons", icon: <FaUsers className="text-blue-400" /> },
        { name: "Developed innovative prototypes", icon: <FaLightbulb className="text-yellow-400" /> },
        { name: "Collaborated with diverse teams", icon: <FaUsers className="text-green-400" /> },
        { name: "Learned new technologies", icon: <FaLaptopCode className="text-purple-400" /> },
      ],
      backgroundImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative pt-24"
      style={{ height: `${(cards.length + 1) * 100}vh` }}
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-6xl md:text-7xl lg:text-8xl text-white font-['Londrina_Shadow'] text-center py-10 sticky top-0 z-20 mix-blend-difference"
      >
        About Me
      </motion.h2>

      <div className="sticky top-0 h-[calc(100vh)] overflow-hidden">
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
                className="transition-opacity duration-100"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            </motion.div>
          );
        })}

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
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 md:px-16 mt-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl w-full">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 flex items-center justify-center bg-black bg-opacity-60 rounded-[1rem] border-[3px] border-white">
                  {card.icon}
                </div>
                <div className="flex-1 text-center md:text-left w-full">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#bc4749] mix-blend-difference">
                    {card.title}
                  </h3>
                  <p className="text-xl md:text-2xl lg:text-3xl text-white font-['Kurale'] p-4 rounded-lg mb-6">
                    {card.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
                    {card.skills && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        {card.skills.map((skill, i) => (
                          <div key={i} className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2 text-xl">
                              <div className="text-3xl">{skill.icon}</div>
                              <span>{skill.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {card.techStack && (
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 ">
                        {card.techStack.map((tech, i) => (
                          <div key={i} className="flex flex-col items-center space-y-2">
                            <div className="text-4xl">{tech.icon}</div>
                            <div className="text-lg text-center">{tech.name}</div>
                          </div>
                        ))}
                      </div>
                    )}
                    {card.strengths && (
                      <div className="grid grid-cols-2 gap-4">
                        {card.strengths.map((strength, i) => (
                          <div key={i} className="flex items-center space-x-2 text-lg">
                            <div className="text-3xl">{strength.icon}</div>
                            <span>{strength.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {card.activities && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {card.activities.map((activity, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="text-2xl">{activity.icon}</div>
                            <span>{activity.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {card.contributions && (
                      <div className="col-span-2">
                        <h4 className="text-xl font-bold mb-4">Open Source Contributions</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {card.contributions.map((contribution, i) => (
                            <div key={i} className="bg-white bg-opacity-10 p-4 rounded flex items-center space-x-3">
                              <div className="text-3xl">{contribution.icon}</div>
                              <div>
                                <div className="font-bold">{contribution.name}</div>
                                <div className="text-sm">{contribution.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
          y: useTransform(scrollYProgress, [0.9, 1], ["100%", "15%"]),
        }}
        className="sticky top-0 h-screen flex items-center justify-center text-center px-4 md:px-16 z-10"
      >
        <div className="p-8 md:p-12 rounded-lg max-w-4xl bg-gradient-to-br from-black to-gray-800 bg-opacity-90 shadow-2xl">
          <p className="text-xl md:text-2xl text-white mb-8 font-['Kurale'] leading-relaxed">
            With a strong foundation in both front-end and back-end
            technologies, I specialize in building robust, scalable applications
            that not only meet but exceed client expectations. My approach
            combines technical expertise with creative problem-solving, ensuring
            that every project I undertake is both innovative and impactful.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <FaReact className="text-5xl text-[#61DAFB]" />
            <FaNodeJs className="text-5xl text-[#339933]" />
            <SiMongodb className="text-5xl text-[#47A248]" />
            <SiExpress className="text-5xl text-white" />
            <SiFirebase className="text-5xl text-[#FFCA28]" />
          </div>
          <motion.button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 text-xl font-medium rounded-lg text-white bg-gradient-to-r from-[#bc4749] to-[#a53860] hover:from-[#a53860] hover:to-[#bc4749] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#bc4749] transition-all duration-300 shadow-lg"
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


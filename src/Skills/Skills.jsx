import React from "react";
import { motion } from "framer-motion";
import "./skills.css";
const skillsData = [
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    category: "Languages",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    category: "Languages",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    category: "Backend",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "Frontend",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "Languages",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.drupal.org/files/project-images/screenshot_361.png",
    category: "Frontend",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "Database",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "Tools",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    category: "Backend",
  },
  {
    name: "Vercel",
    icon: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    category: "Tools",
  },
  {
    name: "Netlify",
    icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    category: "Tools",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "Frontend",
  },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className=" p-3 rounded-lg border-[black] border-[0.1px] transition-all duration-300  flex items-center space-x-3 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className=" p-2 rounded-full">
        <img src={skill.icon || "/placeholder.svg"} alt={skill.name} className="w-8 h-8 object-contain" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
    </motion.div>
  )
}

const SkillCategory = ({ category, skills }) => {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 text-[#bc4749] border-b-2 border-[#bc4749] pb-2 inline-block">
        {category}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  )
}

const Skills = () => {
  const categories = Array.from(new Set(skillsData.map((skill) => skill.category)))

  return (
    <section className="py-16 bg-[#f2e8cf]">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-12 text-center text-[#bc4749] relative font-['Londrina_Shadow']"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technologies
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#bc4749]"></span>
        </motion.h1>
        <div className="grid gap-8">
          {categories.map((category) => (
            <SkillCategory
              key={category}
              category={category}
              skills={skillsData.filter((skill) => skill.category === category)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
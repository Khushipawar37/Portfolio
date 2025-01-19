"use client";

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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
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

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      className="bg-[#f2e8cf] p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center space-y-2">
        <img
          src={skill.icon || "/placeholder.svg"}
          alt={skill.name}
          className="w-12 h-12 object-contain"
        />
        <h3 className="text-base font-['Kurale'] text-gray-800">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, skills }) => {
  return (
    <div className="mb-8">
      <h2 className="text-4xl font-bold font-['Londrina_Shadow'] mb-4 text-[#bc4749] border-b border-[#bc4749] pb-2">
        {category}
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const categories = Array.from(
    new Set(skillsData.map((skill) => skill.category))
  );

  return (
    <section className="py-16 bg-[#f2e8cf]">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl md:text-8xl font-['Londrina_Shadow'] mb-10 text-center text-gray-800">
          Technologies
        </h1>
        <div className="grid gap-8 ">
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
  );
};

export default Skills;

import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode } from "react-icons/fa";

const ExperienceItem = ({ title, role, description, icon: Icon, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className={`flex items-center mb-16 ${isLeft ? "flex-row-reverse" : ""}`}
  >
    <div
      className={`w-1/2 ${isLeft ? "pl-8" : "pr-8"} ${
        isLeft ? "text-right" : "text-left"
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-[#f2e8cf] p-6 rounded-3xl shadow-lg border-2 border-[#bc4749]"
      >
        <h3 className="text-4xl font-bold font-['Londrina_Shadow'] text-[#bc4749] mb-2">
          {title}
        </h3>
        <h4 className="text-2xl font-semibold text-gray-700 mb-2">{role}</h4>
        <p className="text-gray-600">{description}</p>
      </motion.div>
    </div>
    <div className="w-16 flex justify-center">
      <div className="relative">
        <div className="h-full w-0.5 bg-[#bc4749] absolute left-1/2 transform -translate-x-1/2"></div>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 360 }}
          className="w-16 h-16 bg-[#bc4749] rounded-full flex items-center justify-center text-white text-2xl z-10 relative"
        >
          <Icon />
        </motion.div>
      </div>
    </div>
    <div className="w-1/2"></div>
  </motion.div>
);

const Experience = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f2e8cf] to-[#f8f3e2] font-['Kurale']">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-['Londrina_Shadow'] text-center text-gray-800 mb-16"
        >
          Work Experience
        </motion.h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#bc4749]"></div>
          <div className="space-y-8 ">
            <ExperienceItem
              title="Code Alpha"
              role="Full Stack Web Developer"
              description="Worked on end-to-end web development projects, utilizing both frontend and backend technologies to create comprehensive web solutions."
              icon={FaLaptopCode}
              isLeft={false}
            />
            <ExperienceItem
              title="Open Source"
              role="Contributor"
              description="Participated in GSoC'24, SSOC'24, and SWOC'24, contributing to various open-source projects and enhancing my collaborative coding skills."
              icon={FaCode}
              isLeft={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

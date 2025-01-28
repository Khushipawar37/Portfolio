// import "./landing.css";
import dp from "/src/assets/dpp.png";
import { motion } from 'framer-motion'

export default function Landing() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-[#f2e8cf]">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen p-2 md:p-[5rem]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:w-1/2 space-y-6"
        >
          <h1 className="text-6xl md:text-8xl font-['Londrina_Shadow'] text-gray-800">
            KHUSHI PAWAR
          </h1>
          <div className="flex items-center justify-center md:justify-start space-x-4">
            <div className="h-px bg-[#bc4749] w-16"></div>
            <p className="text-xl md:text-2xl text-[#bc4749] font-['Kurale']">Crafting Logic, Building Systems</p>
            <div className="h-px bg-[#bc4749] w-16"></div>
          </div>
          <p className="text-lg md:text-xl font-['Kurale'] text-gray-600 max-w-lg">
            Simplifying complexity through thoughtful design and meticulous coding. Building seamless bridges between innovative ideas and impactful solutions.
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-8 md:mt-0 md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            {/* Static outer white ring */}
            <div className="absolute inset-0 rounded-full bg-black"></div>
            
            {/* Inner background circle */}
            <div className="absolute inset-[3px] rounded-full bg-[#bc4749]"></div>
            
            {/* Image container */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden">
              <img
                src={dp}
                alt="Khushi Pawar"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Static outer ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-[#bc4749] opacity-50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


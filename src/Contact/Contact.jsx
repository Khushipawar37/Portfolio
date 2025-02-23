import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  }    

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#f2e8cf] font-['Kurale']">
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between min-h-screen p-4 md:p-8 lg:p-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col justify-center space-y-8 mb-8 lg:mb-0"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-['Londrina_Shadow'] text-gray-800 leading-tight">
            LET'S CREATE
            <br />
            TOGETHER
          </h1>
          <div className="flex items-center space-x-4">
            <div className="h-px bg-[#bc4749] w-16"></div>
            <p className="text-xl md:text-2xl text-[#bc4749]">Your Vision, My Expertise</p>
            <div className="h-px bg-[#bc4749] w-16"></div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-400 focus:border-[#bc4749] transition-colors duration-300 outline-none text-lg"
                required
                placeholder="Your Name"
              />
              <label htmlFor="name" className="absolute left-0 -top-6 text-sm text-gray-600">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-400 focus:border-[#bc4749] transition-colors duration-300 outline-none text-lg"
                required
                placeholder="Your Email"
              />
              <label htmlFor="email" className="absolute left-0 -top-6 text-sm text-gray-600">
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-400 focus:border-[#bc4749] transition-colors duration-300 outline-none text-lg"
                placeholder="Your Phone (optional)"
              />
              <label htmlFor="phone" className="absolute left-0 -top-6 text-sm text-gray-600">
                Phone
              </label>
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-0 py-2 bg-transparent border-b-2 border-gray-400 focus:border-[#bc4749] transition-colors duration-300 outline-none text-lg resize-none"
                required
                placeholder="Your Message"
              ></textarea>
              <label htmlFor="message" className="absolute left-0 -top-6 text-sm text-gray-600">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-[#bc4749] text-white rounded-full hover:bg-[#a53e40] transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="text-[#bc4749] text-lg">Thanks for contacting !</p>}
            {status === "error" && <p className="text-[#bc4749] text=lg">Error sending message. Please try again.</p>}
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col justify-center items-center lg:items-end space-y-12"
        >
          <div className="text-right">
            <h2 className="text-4xl md:text-5xl font-['Londrina_Shadow'] text-gray-800 mb-4">COLLABORATE</h2>
            <p className="text-xl text-gray-600 max-w-md">
              Let's join forces and bring your ideas to life. Whether it's a small project or a grand vision, I'm here
              to help you turn concepts into reality.
            </p>
          </div>
          <div className="hidden md:block w-full max-w-sm aspect-square relative group">
            <div className="absolute inset-0 bg-[#bc4749] rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="absolute inset-0 bg-[#f2e8cf] rounded-3xl border-2 border-[#bc4749] flex items-center justify-center p-8">
              <div className="text-center">
                <h3 className="text-3xl font-['Londrina_Shadow'] text-[#bc4749] mb-4">INNOVATION AWAITS</h3>
                <p className="text-lg text-gray-700">
                  Ready to embark on a journey of creativity and problem-solving? Let's make something extraordinary
                  together.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#bc4749] via-[#f2e8cf] to-[#bc4749]"></div>
    </section>
  )
}


const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'khushipawar987@gmail.com',
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Message: ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    res.status(500).json({ message: "Error sending email" })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Exists" : "Not Found");


import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="nav">
      <div className="navHead">Khushi</div>
      <div className="navIcons">
        <Link to="/#home" className="navItem" onClick={() => scrollToSection("home")}>
          Home
        </Link>
        <Link to="/#skills" className="navItem" onClick={() => scrollToSection("skills")}>
          Skills
        </Link>
        <Link to="/#projects" className="navItem" onClick={() => scrollToSection("projects")}>
          Projects
        </Link>
        <Link to="/#work" className="navItem" onClick={() => scrollToSection("work")}>
          Work
        </Link>
        <Link to="/#contact" className="navItem" onClick={() => scrollToSection("contact")}>
          Contact
        </Link>
      </div>
    </nav>
  )
}


import { useState, useEffect } from "react"
import "../slider.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ProjectSlider = () => {
    const [projects, setProjects] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    
    useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("data/projects.json")
      const data = await response.json()
      setProjects(data)
    }
    fetchProjects()
    }, [])


    useEffect(() => {
        if (projects.length === 0) return // vent til data er hentet

        const container = document.querySelector(".projects-wrapper")
        const sections = gsap.utils.toArray(".project-card")

        // Horisontal scroll
        let scrollTween = gsap.to(container, {
            xPercent: -100 * (sections.length - 1),
            ease: "",
            scrollTrigger: {
            trigger: ".project-slider",
            pin: true,
            scrub: 1,
            end: () => "+=" + container.offsetWidth,
            onUpdate: (self) => {
            // beregn aktiv index baseret på scroll progress
            const newIndex = Math.round(self.progress * (sections.length - 1))
            setActiveIndex(newIndex)
            }
      }
    })

    return () => {
      scrollTween.scrollTrigger?.kill()
      scrollTween.kill()
    }
  }, [projects])
    
    const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

    return (
    <div className="project-slider">
     
      <div className="projects-wrapper">
       
        {projects.map((project, index) => (
          <NavLink to={`/projekter/${project.id}`}
            key={project.id}
            className={`project-card ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <p>({String(project.id).padStart(2, "0")})</p>
            <img src={project.image} alt={project.title} />
            <h2 className="text-marg">{project.title}</h2>
            <h2 className="text-padding"><i>{project.client}</i></h2>
          </NavLink>
        ))}
      </div>

      <div className="slider-controls">
        <button onClick={prevSlide}>←</button>
        <button onClick={nextSlide}>→</button>
      </div>
    </div>
  )
}

export default ProjectSlider
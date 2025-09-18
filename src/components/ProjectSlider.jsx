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

        if (window.innerWidth <= 860) return

        const container = document.querySelector(".projects-wrapper")
        const sections = gsap.utils.toArray(".project-card")

        // Horisontal scroll
        let scrollTween = gsap.to('.projects-wrapper', {
             x: () => -(container.scrollWidth - window.innerWidth),
            ease: 'none',
            scrollTrigger: {
            trigger: ".project-slider",
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
            start: 'top 15%',
             end: () => "+=" + (container.scrollWidth - window.innerWidth + 1000

             ),
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
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, [projects])
    
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
            
            <div className="image-wrapper">
                <img src={project.image[0]} alt={project.title} />

                <div className="info-bar">
                    <p>{project.tools.join(", ")}</p>
                    <p>{project.services.join(", ")}</p>
                </div>
            </div>
            
            <h2 className="text-marg">{project.title}</h2>
            <h2 className="text-padding"><i>{project.client}</i></h2>
             <span className="see-project">Se projekt →</span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ProjectSlider
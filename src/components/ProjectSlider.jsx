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
  if (projects.length === 0) return;

  const container = document.querySelector(".projects-wrapper");
  const sections = gsap.utils.toArray(".project-card");

  // Only run horizontal scroll on large screens
  let scrollTween;
  if (window.innerWidth > 860) {
    scrollTween = gsap.to(".projects-wrapper", {
      id: "sliderAnim",
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: ".project-slider",
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
        start: "top 15%",
        end: () => "+=" + (container.scrollWidth - window.innerWidth + 1000),
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (sections.length - 1));
          setActiveIndex(newIndex);
        },
      },
    });
  }

  const tl = gsap.timeline();
    tl.fromTo(
      ".project-card",
      { opacity: 0, y: 60, scale: 0.95 }, // start state
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    return () => {
      scrollTween?.scrollTrigger?.kill();
      scrollTween?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, [projects]);
    
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
                <img className="project-image" src={project.image[0]} alt={project.title} />

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
import ProjectSlider from "../components/ProjectSlider"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { useEffect } from "react"
import gsap from "gsap"
import "../slider.css";


const Projects = () => {
    useEffect(() => {
    gsap.fromTo(
    ".after-heading h1",
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".after-heading",
        start: "top 80%",   // when this section scrolls into view
        toggleActions: "play none none reverse"
      }
    }
  )
}, [])



  return (
    <main>
      <Nav />
      <section className='projekt-heading'>
        <h1>PROJEKTER</h1>
      </section>

      <section className='horisontal-container'>
        <ProjectSlider />
      </section>

       <section className='projekt-heading after-heading'>
        <h1>PROJEKTER</h1>
        <h1>(04)</h1>
      </section>
      
      <Footer />
    </main>
  )
}

export default Projects
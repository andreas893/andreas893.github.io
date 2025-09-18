import ProjectSlider from "../components/ProjectSlider"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import "../slider.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
   useEffect(() => {
    // select all h1s inside .projekt-heading
    gsap.utils.toArray(".projekt-heading h1").forEach((heading) => {
      gsap.fromTo(
        heading,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay:1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heading,
            start: "top 85%", // fires when THIS heading scrolls in
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);



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
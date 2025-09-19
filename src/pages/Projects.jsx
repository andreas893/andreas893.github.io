import ProjectSlider from "../components/ProjectSlider";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import "../slider.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
   useEffect(() => {
    // Animate only the first heading once on load
    gsap.fromTo(
      ".projekt-heading:first-of-type h1",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
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

       <section className='projekt-heading'>
        <h1>PROJEKTER</h1>
        <h1>(04)</h1>
      </section>
      
      <Footer />
    </main>
  )
}

export default Projects
import '../index.css';
import Nav from '../components/Nav';
import ProjectSection from '../components/ProjectSection';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { useRef } from "react";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(SplitText);
  

const Landing = () => {
  const videoRef = useRef();

   useGSAP(() => {
    // Split heading into characters
    const headingSplit = new SplitText(".heading-l", { type: "lines" });
    // Split paragraph into lines
    const paragraphSplit = new SplitText(".heading-s", { type: "lines" });

    // Animate video container
    gsap.from(".landing-vid-container", {
      opacity: 0,
      y: 0,
      stagger: 0.08,
      duration: 1.2,
      delay:1.2,
      ease: "expo.out",
    });

     // Animate heading letters
    gsap.from(headingSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.08,
      delay: 0.8,
    });

     // Animate paragraph lines
    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.08,
      delay: 0.8,
    });

     // Animate arrow
    gsap.from(".arrow", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 1.2,
    });
  }, []);


  return (
    <>
      <Nav/>
      <section className="vid-section">
        <figure className="front-vid">
          <div className='landing-vid-container'>
             <video ref={videoRef} controls autoPlay muted loop className='landing-vid' src="/home/front-vid.mp4"></video>
          </div>
        </figure>
      </section>

      <section className='heading'> 
        <div className='heading-l-container'>
          <h1 className='heading-l'>FRONTEND & DESIGN</h1>
        </div> 
      
        <div className='heading-s-container'>
          <p className='heading-s'>Min passion er at forene design, frontend og animationer i løsninger, der både fungerer teknisk og gør indtryk visuelt.</p>
        </div>
      </section>
       <div className='arrow-container'>
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 5v14m7-7-7 7-7-7"/>
          </svg>
        </div>
      <ProjectSection />
      <AboutContent />
      <Footer />
    </>

  )
}

export default Landing
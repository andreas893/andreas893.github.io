import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutContent = () => {
    const aboutRef = useRef();

  
  useGSAP(() => {
    // Whole section reveal
    gsap.fromTo(
      aboutRef.current,
      {
        y: 200,
        scale: 0.85,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 90%",
          end: "top 20%",
          scrub: true,
        },
      }
    );


    gsap.from(
      aboutRef.current.querySelectorAll(".about-grid, .about-grid-2"),
      {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%", 
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="about" ref={aboutRef}>
     
        <div className="about-head">
            <p className="a-head-1">HVEM</p>
            <p className="a-head-2">ER JEG?</p>
        </div>

        <div className="about-content">
            
            <div className="about-grid">
                <h2>OM MIG</h2>
                <p className="tekst-1">
                    Jeg er Andreas, en kreativ og passioneret multimediedesigner, der brænder for frontend og digitalt design. 
                </p>
                <p className="tekst-2">
                    Med inspiration fra musik, visuelle universer og storytelling skaber jeg oplevelser, der både fanger øjet og engagerer brugeren.
                </p>

                <div className="projekt-btn-container projekt-btn-container-2">
                <NavLink to="/projekter" end className="projekt-btn projekt-btn-2">KOM TÆTTERE PÅ MIG
                <svg className="arrow-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </NavLink>
                </div>
            </div>

            <div className="about-grid-2">
                <div className="about-img">
                    <img src="/home/about-front.png" alt="About billede" />
                 </div>
            </div>
             
        </div>

    </section>
    

  )
}

export default AboutContent
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import "../about.css";
import TextSlider from '../components/TextSlider';
import { NavLink } from 'react-router-dom';
import { motion as Motion } from "framer-motion";
import { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from 'gsap/all';
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  const [isDropped1, setIsDropped1] = useState(false);
  const [isDropped2, setIsDropped2] = useState(false);
  const [isDropped3, setIsDropped3] = useState(false);
  const sectionRef = useRef();
  const galleriRef = useRef();

  useGSAP(() => {
    const textElements = sectionRef.current.querySelectorAll(
      ".ab-heading p, .a-text-1, .a-text-2, .nav-btn-2"
    );

    gsap.from(textElements, {
      scaleY: 0,             
      transformOrigin: "bottom", 
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(sectionRef.current.querySelector(".a-grid-item-2 img"), {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.6, // starts after some text has animated
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

   
    gsap.from(galleriRef.current.querySelectorAll(".galleri-content > *"), {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: galleriRef.current,
        start: "top 80%",
      },
    });

    gsap.from(galleriRef.current.querySelectorAll(".about-img-container img"), {
  y: 40,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: galleriRef.current,
    start: "top 80%",
  },
});


    gsap.from(galleriRef.current.querySelector(".drag-text h2"), {
      scaleY: 0,
      transformOrigin: "bottom",
      opacity: 0,
      skewY: 8,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: galleriRef.current.querySelector(".drag-text"),
        start: "top 85%",
      },
    });
    
  }, []);


  return (
    <main>
      <Nav />
      <section className='about-hero' ref={sectionRef}>
        
        <div className='a-hero-grid'>
          
          <div className='a-grid-item-1'>
              <div className='ab-heading'>
                <p className='ab-h1'>BAG</p>
                <p className='ab-h2'>PROJEKTERNE</p>
              </div>

              <p className='a-text-1'>Mit arbejde handler ikke kun om programmering og design, men om de historier, oplevelser og idéer, der driver mig til at skabe digitale løsninger.</p>
                
             
              <p className='a-text-2'>Jeg ser frontendduvikling som en mulighed for at skabe digitale oplevelser, hvor brugeroplevelse og design mødes i øjenhøjde med brugeren.</p>

              <NavLink to="/kontakt" className="nav-btn nav-btn-2">
                <div className='text-anim' ><p>KONTAKT MIG</p>
                <p>KONTAKT MIG</p></div>
                <span></span>
              </NavLink>
          </div>
          
          <div className='a-grid-item-2'>
            <img loading='lazy' src="/about/about-1.png" alt="about-pic" />
          </div>
        </div>
      </section>


      <div className="text-slider">
        <TextSlider />
      </div>

      <section className='about-galleri' ref={galleriRef}>
        <div className='galleri-content'>
           <h2>MIN PROCES</h2>
           <p className='galleri-text-1'>Mit arbejde handler ikke kun om programmering og design, men om de historier, stemninger og idéer, der driver mig. </p>
        
            <p>Jeg henter inspiration i musik og de visuelle universer, der omgiver den – fra komposition og æstetik til de fortællinger, der formidles. Det giver mig et blik for at skabe løsninger, der både fungerer teknisk og engagerer visuelt.</p>
          </div>
       
        <div className='about-img-container'>
            <Motion.img
                  className='img-4'
                  src="/about/about-4.png"
                  alt="about"
                  drag
                  dragMomentum={false}
                  whileTap={{ cursor: "grabbing", scale: 0.7 }}   // small lift while dragging
                  animate={{ scale: isDropped1 ? 0.7 : 1}}        // shrink when dropped
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onDragEnd={() => setIsDropped1(true)}            // shrink after drop
                  onDragStart={() => setIsDropped1(false)}         // reset when picked up again
            />
            
            <Motion.img
                    className='img-3'
                    src="/about/about-3.png"
                    alt="about"
                    drag
                    dragMomentum={false}
                    whileTap={{ cursor: "grabbing", scale: 0.7 }}   // small lift while dragging
                    animate={{ scale: isDropped2 ? 0.7 : 1}}        // shrink when dropped
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onDragEnd={() => setIsDropped2(true)}            // shrink after drop
                    onDragStart={() => setIsDropped2(false)}         // reset when picked up again
                    />
            
            <Motion.img
                className='img-2'
                src="/about/about-2.png"
                alt="about"
                drag
                dragMomentum={false}
                whileTap={{ cursor: "grabbing", scale: 0.7 }}   // small lift while dragging
                animate={{ scale: isDropped3 ? 0.7 : 1 }}        // shrink when dropped
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onDragEnd={() => setIsDropped3(true)}            // shrink after drop
               onDragStart={() => setIsDropped3(false)}         // reset when picked up again
            />
        </div>
        
        <div className='drag-text'>
              <h2><i>DRAG ME</i></h2>
        </div>

      </section>

      <Footer />
    </main>
  )
};

export default About;
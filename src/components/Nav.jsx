import { NavLink } from "react-router-dom"
import { useState,useEffect } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(SplitText, useGSAP);

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    useGSAP(() => {

    gsap.from(".logo a", {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
    });


    const navSplit = new SplitText(".nav-links a", { type: "lines" });

    gsap.from(navSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.08,
      delay: 0.8
    });

 
    gsap.from(".nav-btns", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.8,
    });
  }, []);

    useEffect(() => {
    if (isOpen) {
      // open animation
      gsap.fromTo(
        ".menu-dropdown",
        { y: "-100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      gsap.from(".menu-dropdown ul li", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        delay: 0.2,
      });
    } else {
      // close animation
      gsap.to(".menu-dropdown", {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

   const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay blocked:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <header>    
        <nav className='navbar'>
            
            <div className="logo-container">
                <span className="logo">
                    <NavLink to="/" end className="logo">AH</NavLink>
                </span>
            </div>
                
            
            <div className={`nav-links-container ${isOpen ? "show" : ""}`}>
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" end onClick={() => setIsOpen(false)}>
                            HOME, 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/om" onClick={() => setIsOpen(false)}>
                            OM MIG, 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projekter " onClick={() => setIsOpen(false)}>
                            PROJEKTER, 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/kontakt" onClick={() => setIsOpen(false)}>
                            KONTAKT
                        </NavLink>
                    </li>
                </ul>
            </div>
            

           <div className="nav-btns">
                <img className="nav-img" src="/music-icon.png" alt="music-icon" onClick={toggleMusic} style={{cursor:"pointer"}} />
                 <audio ref={audioRef} src="/song.mp3" loop />
                <a href="mailto:youremail@example.com" className="nav-btn">
                    <div className="text-anim">
                        <p>GET IN TOUCH</p>
                        <p>GET IN TOUCH</p>
                    </div>
                    <span></span>
                </a>

          {/* Burger only for mobile */}
          <button 
            className={`menu-btn ${isOpen ? "open" : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            MENU <span className="plus">+</span>
          </button>
        </div>
        </nav>

        <div className={`menu-dropdown ${isOpen ? "show" : ""}`}>
            <div className="close-btn">
                <span className="logo logo-white">
                        <NavLink to="/" end className="logo">AH</NavLink>
                    </span>
                <button onClick={() => setIsOpen(false)}>CLOSE</button>
            </div>

            <ul>
            <li><NavLink to="/" end onClick={() => setIsOpen(false)}>(HOME)</NavLink></li>
            <li><NavLink to="/om" onClick={() => setIsOpen(false)}>(OM MIG)</NavLink></li>
            <li><NavLink to="/projekter" onClick={() => setIsOpen(false)}>(PROJEKTER)</NavLink></li>
            <li><NavLink to="/kontakt" onClick={() => setIsOpen(false)}>(KONTAKT)</NavLink></li>
            </ul>
      </div>
    </header>    
  )
}

export default Nav
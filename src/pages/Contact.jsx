import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../contact.css";
import { useEffect } from "react";
import gsap from "gsap";

const Contact = () => {
   useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });


    tl.fromTo(
      ".kontakt-heading p",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
    )

      // 2. Content
      .fromTo(
        ".k-grid-item-1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "+=0.2" 
      )

      // 3. Links
      .fromTo(
        ".k-grid-item-2 a",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "+=0.2"
      );
  }, []);
  return (
    <main>
      <Nav />
      <section className='kontakt-heading'>
        <p className="ab-h1">SKAL VI SKABE</p>
        <p className="ab-h2">NOGET SAMMEN</p>
      </section>
      
      <section className='oplysninger'>
        <div className="k-grid-item-1">
            <h2>SIG HEJ</h2>
            <p>Jeg er altid åben for en samtale om praktik, projekter eller samarbejde</p>
            <p className="arrow-text">Du kan fange mig her <svg class="arrow-kontakt" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 5v14m7-7-7 7-7-7"/>
            </svg> </p> 
            
        </div>
        
        <div className="k-grid-item-2">
          <a target='_blank' href="https://www.linkedin.com/in/andreas-hansen-baab87372/">LinkedIn</a>
          <a  href="mailto:youremail@example.com">Andreashansen@gmail.com</a>
        </div>

      </section>

      <Footer />
    </main>
  )
}

export default Contact
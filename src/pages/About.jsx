import Nav from '../components/Nav'
import Footer from '../components/Footer'
import "../about.css";
import TextSlider from '../components/TextSlider';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState } from 'react';

const About = () => {
  const [isDropped1, setIsDropped1] = useState(false);
  const [isDropped2, setIsDropped2] = useState(false);
  const [isDropped3, setIsDropped3] = useState(false);


  return (
    <main>
      <Nav />
      <section className='about-hero'>
        
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
            <img src="/about/about-1.png" alt="about-pic" />
          </div>
        </div>
      </section>


      <div className="text-slider">
        <TextSlider />
      </div>

      <section className='about-galleri'>
        <div className='galleri-content'>
           <h2>MIN PROCES</h2>
           <p className='galleri-text-1'>Mit arbejde handler ikke kun om programmering og design, men om de historier, stemninger og idéer, der driver mig. </p>
        
            <p>Jeg henter inspiration i musik og de visuelle universer, der omgiver den – fra komposition og æstetik til de fortællinger, der formidles. Det giver mig et blik for at skabe løsninger, der både fungerer teknisk og engagerer visuelt.</p>
          </div>
       
        <div className='about-img-container'>
            <motion.img
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
            
            <motion.img
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
            
            <motion.img
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
}

export default About
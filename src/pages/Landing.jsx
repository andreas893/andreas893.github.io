import '../index.css';
import Nav from '../components/Nav';
import ProjectSection from '../components/ProjectSection';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <>
      <Nav/>
      <section className="vid-section">
        <figure className="front-vid">
          <div className='landing-vid-container'>
             <video controls autoPlay muted loop className='landing-vid' src="/home/front-vid.mp4"></video>
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
          <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24">
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
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "../contact.css";

const Contact = () => {
  return (
    <main>
      <Nav />
      <section className='kontakt-heading'>
        <p className="ab-h1">SKAL VI SKABE</p>
        <p className="ab-h2">NOGET SAMMEN?</p>
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
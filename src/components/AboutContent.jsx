import { NavLink } from "react-router-dom"

const AboutContent = () => {
  return (
    <section className="about">
     
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
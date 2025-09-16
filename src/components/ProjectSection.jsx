import { NavLink } from "react-router-dom"

const ProjectSection = () => {
  return (
    <section className='projekter'>
        
        <div className='p-head'>
            <div className="left-text">
                <p className="p-head-1">UDVALGTE</p>
                <p className="p-head-2">PROJEKTER</p>
            </div>
            <p className="number">(02)</p>
        </div>

        <div className='f-grid'>
            <div className='content-1'>
                <h2><i>Bag Facaden</i></h2>
                <img src="/home/bag-facaden.png" alt="Bag facaden"/>
                <p>Interaktiv formidling af social angst</p>
            </div>

            <div className='content-2'>
                <h2>Steno Museet <span>'25</span></h2>
                <img src="/home/bag-facaden-2.png" alt="Bag Facaden" />
            </div>
        </div>

        <div className='grid-heading'>
            <div className='h-1'>
                 <h2><i>Radar Venue</i></h2>
            </div>
            
            <div className='h-2'>
                <h2>Radar Live <span>'25</span></h2>
            </div>
        </div>
           
            
        <div className='s-grid'>
            <div className='s-content-1'>
                <img src="/home/radar-live.jpg" alt="Radar Live" />
                <p>En mere intuitiv koncertoplevelse online</p>
            </div>

            <div className='s-content-2'>
                <img src="/home/radar-live-2.png" alt="Radar Live" />
            </div>
        </div>
        
        <div className="projekt-btn-container">
            <NavLink to="/projekter" end className="projekt-btn">SE ALLE PROJEKTER
             <svg className="arrow-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </NavLink>
        </div>
               

        

        
    </section>
  )
}

export default ProjectSection
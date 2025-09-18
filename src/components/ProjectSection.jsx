import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react";

const ProjectSection = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProjects(data); 
    }
    fetchProjects();
  }, []);

  if (projects.length < 2) return null; // wait until data is loaded

   const firstProject = projects[0]; // index 0
  const thirdProject = projects[2]; // index 2

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
                <h2><i>{firstProject.title}</i></h2>
                  <NavLink to={`/projekter/${firstProject.id}`}>
                        <img
                            className="project-image"
                            src={firstProject.image[0]}
                            alt={firstProject.title}
                        />
                    </NavLink>
                <p>Interaktiv formidling af social angst</p>
            </div>

            <div className='content-2'>
                <h2>{firstProject.client} <span>'25</span></h2>
               <NavLink to={`/projekter/${firstProject.id}`}>
                         <img
                            className="project-image"
                            src="/home/bag-facaden-2.png"
                            alt={firstProject.title}
                        />
                </NavLink>
            </div>
        </div>

        <div className='grid-heading'>
            <div className='h-1'>
                 <h2><i>{thirdProject.title}</i></h2>
            </div>
            
            <div className='h-2'>
                <h2>{thirdProject.client} <span>'24</span></h2>
            </div>
        </div>
           
            
        <div className='s-grid'>
            <div className='s-content-1'>
                <NavLink to={`/projekter/${thirdProject.id}`}>
            <img
              className="project-image"
              src="/home/radar-live.jpg"
              alt={thirdProject.title}
            />
          </NavLink>
                <p>En mere intuitiv koncertoplevelse online</p>
            </div>

            <div className='s-content-2'>
                <NavLink to={`/projekter/${thirdProject.id}`}>
            <img
              className="project-image"
              src={thirdProject.image[0]}
              alt={thirdProject.title}
            />
          </NavLink>
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
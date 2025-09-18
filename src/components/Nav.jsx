import { NavLink } from "react-router-dom"
import { useState } from "react"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    
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
                <img className="nav-img" src="/music-icon.png" alt="music-icon" />
                <a href="mailto:youremail@example.com" className="nav-btn">
                    <div><p>GET IN TOUCH</p></div>
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
            <li><NavLink to="/kontakt" onClick={() => setIsOpen(false)}>(KONTAKT</NavLink></li>
            </ul>
      </div>
    </header>    
  )
}

export default Nav
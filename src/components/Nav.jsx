import { NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <header>    
        <nav className='navbar'>
            
            <div className="logo-container">
                <span className="logo">
                    <NavLink to="/" end className="logo">AH</NavLink>
                </span>
            </div>
                
            
            <div className="nav-links-container">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" end>
                            HOME,
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/om">
                            OM MIG,
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projekter">
                            PROJEKTER,
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/kontakt">
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
            </div>
                
        </nav>
    </header>    
  )
}

export default Nav
import { NavLink } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer">
      
      <div className='footer-grid'>
      
        <div className="footer-logo">
          <img src="/footer-img.png" alt="grafik" />
          <span className='logo'>AH</span>
          <span>&copy; Andreas Hansen Portfolio 2025</span>
        </div>

        <nav className="footer-nav">
          <p>(NAVIGATION)</p>

          <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/om">Om mig</NavLink></li>
            <li><NavLink to="/projekter">Projekter</NavLink></li>
            <li><NavLink to="/kontakt">Kontakt</NavLink></li>
          </ul>
        </nav>

        <div className="kontakt">
          <p>(KONTAKTOPLYSNINGER)</p>
          <a href="mailto:youremail@example.com">Andreashansen@gmail.com</a>
          <a href="https://www.linkedin.com/in/andreas-hansen-baab87372/" target="_blank">LinkedIn</a>
          <a href="https://github.com/andreas893" target="_blank">GitHub</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
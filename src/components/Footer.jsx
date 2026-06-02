import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo">Cozy Cafe</h3>
          <p className="footer-address">7113 N Western Ave, Chicago, IL 60645</p>
          <p className="footer-hours">Mon-Fri: 9am - 4pm | Sun: 9am - 3pm</p>
        </div>

        <div className="footer-links">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#location">Location & Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/cozy_cafe7113/">Instagram<i class="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cozy Cafe. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
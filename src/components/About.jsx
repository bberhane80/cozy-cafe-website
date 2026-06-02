import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src="/images/interior.jpg" alt="Inside Cozy Cafe" />
      </div>

      <div className="about-content">
        <h2 className="about-title">More Than Just Coffee.</h2>
        <p className="about-body">
          Cozy Cafe is a beloved neighborhood gem in Chicago where exceptional coffee and fresh-baked goods meet genuine hospitality. With nearly perfect ratings from loyal customers who rave about both the quality brews and friendly service, this independent cafe feels like your local living room. Stop by to experience the kind of personal touch and care that only comes from a community-focused, locally-owned shop
        </p>
        <p className="about-body">
          Whether you're working, catching up with a friend, or just
          need a quiet moment — this is your spot.
        </p>
        <Link to="/our-story" className="about-btn">Read Our Full Story</Link>
      </div>
    </section>
  )
}

export default About
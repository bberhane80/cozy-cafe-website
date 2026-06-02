import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tagline">Est. 2021 · Chicago, IL</p>
          <h1 className="hero-title">Cozy<br />Cafe.</h1>
          <p className="hero-subtitle">
            The first black owned coffee shop on Chicago's northside.
          </p>
          <a href="#menu" className="hero-btn">Explore Our Menu</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
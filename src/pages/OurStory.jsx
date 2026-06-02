import { Link } from 'react-router-dom'
import './OurStory.css'

function OurStory() {
  return (
    <div className="story-page">
      <div className="story-hero">
        <p className="story-label">Our Story</p>
        <h1 className="story-title">How Cozy Cafe Came to Be</h1>
        <p className="story-date">Est. 2024 · Chicago, IL</p>
      </div>

      <div className="story-body">
        <p>
          Cozy Cafe was born out of a simple but persistent idea — that
          everyone deserves a place to slow down. In a city that never
          stops moving, we wanted to create a corner that felt unhurried,
          warm, and genuinely yours.
        </p>
        <p>
          It started with a small espresso machine, a rented kitchen, and
          a handful of regulars who kept coming back not just for the
          coffee, but for the feeling. That feeling — of being known,
          welcomed, and at ease — became the foundation of everything
          we do.
        </p>
        <p>
          We source our beans directly from small farms in Ethiopia,
          Colombia, and Guatemala, building relationships with the people
          who grow what we pour. Every pastry is made in-house each
          morning — nothing frozen, nothing rushed.
        </p>
        <p>
          Today, Cozy Cafe is a neighborhood staple on Maple Street. We're
          proud of the community that has grown around this little shop,
          and we're just getting started.
        </p>

        <Link to="/" className="story-back">← Back to Home</Link>
      </div>
    </div>
  )
}

export default OurStory
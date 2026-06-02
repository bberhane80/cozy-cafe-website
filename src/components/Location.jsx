import './Location.css'

function Location() {
  return (
    <section className="location" id="location">
      <div className="location-header">
        <p className="location-label">Find Us</p>
        <h2 className="location-title">Hours & Location</h2>
      </div>

      <div className="location-content">
        <div className="location-info">
          <div className="location-block">
            <h4>Address</h4>
            <p>7113 N Western Ave</p>
            <p>Chicago, IL 60645</p>
          </div>

          <div className="location-block">
            <h4>Hours</h4>
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Tuesday – Saturday</td>
                  <td>9:00 AM – 4:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>9:00 AM – 3:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="location-block">
            <h4>Contact</h4>
            <p>(773) 312-8146</p>
          </div>
        </div>

        <div className="location-map">
          <iframe
            title="Cozy Cafe Location"
            src="https://maps.app.goo.gl/m5epZNg9UxwJZy2h7"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Location
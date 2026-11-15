
import '../styles/Services.css';

function Services() {
  return (
    <section className="services-page">
      <h1>Our services</h1>

      <div className="services-grid">
        <div className="service-box">
          <h2>Residential design</h2>
          <p>
            We design homes around the slope of the land, the path of the sun,
            and the way you spend your day.
          </p>
        </div>

        <div className="service-box">
          <h2>Renovations</h2>
          <p>
            We rethink how rooms connect, bring daylight into overlooked
            spaces, and keep the details that give your home its character.
          </p>
        </div>

        <div className="service-box">
          <h2>Interior design</h2>
          <p>
            We help you choose materials, finishes, and lighting that feel
            right together, from the kitchen counters to the reading corner.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
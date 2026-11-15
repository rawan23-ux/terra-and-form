import "../styles/About.css";
import houseImage from "../assets/Main.jpg";

function About() {
  return (
    <section className="about-page">
      <div className="about-intro">
        <p className="about-label">About Terra & Form</p>
        <h1>
          A home begins
          <br />
          with a place.
        </h1>
        <p className="about-text">
          A shaded terrace, an open courtyard, a window facing the trees.
          At TERRA & FORM, these are the details that shape a home.
        </p>
        <p className="about-text">
          Created as a university architecture portfolio, TERRA & FORM
          brings together three residential concepts: Dune Retreat,
          Azure Villa, and Pinewood House.
        </p>
      </div>
      <img
        className="about-photo"
        src={houseImage}
        alt="Modern house with a glass balcony beneath a deep roof overhang"
      />
    </section>
  );
}

export default About;
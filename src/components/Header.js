import "../styles/Header.css";
import HouseImage from "../assets/Main.jpg";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <h1 className="site-title">
            Spaces shaped
            <br />
            by life.
          </h1>
          <p className="tagline">
            Thoughtful architecture.
            <br />
            Rooted in nature.
          </p>
        </div>
      </header>
      <img
     className="hero-image"
     src={HouseImage}
     alt="Modern house"
    />
    </>
  );
}

export default Header;
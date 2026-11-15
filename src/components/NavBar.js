import "../styles/NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <div className="container nav">
      <Link to="/" className="brand">TERRA & FORM</Link>
      <Link to="/">Home</Link>
      <a href="/#approach">Approach</a>
      <Link to="/Account">Account</Link>
      <Link to="/About">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/Contact">Contact</Link>
      

      </div>
    </nav>
  );
}

export default NavBar;

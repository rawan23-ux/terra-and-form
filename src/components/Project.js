import "../styles/Project.css";
import duneImage from "../assets/Dune Retreat.jpg";
import azureImage from "../assets/Azure Villa.jpg";
import pinewoodImage from "../assets/Pinewood House.jpg";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Selected Projects</h2>

      <div className="projects-grid">
        <article className="project project-featured">
          <img src={duneImage} alt="Dune Retreat residence" />
          <h3>
            <span>01 /</span> Dune Retreat
          </h3>
        </article>

        <article className="project">
          <img src={azureImage} alt="Azure Villa residence" />
          <h3>
            <span>02 /</span> Azure Villa
          </h3>
        </article>

        <article className="project">
          <img src={pinewoodImage} alt="Pinewood House residence" />
          <h3>
            <span>03 /</span> Pinewood House
          </h3>
        </article>
      </div>
    </section>
  );
}

export default Projects;
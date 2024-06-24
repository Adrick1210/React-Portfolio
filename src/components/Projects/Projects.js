import "./Projects.css";

function Projects() {
  return (
    <div className="projects-table">
      <h1>Work I've done:</h1>
      <div className="container">
        <div className="proj-img">
          <img src="..\images\new-gunpla.png" alt="capstone" />
        </div>
        <div className="project-text">
          <h1>E-Commerce Website</h1>
          <p>
            This project is a demonstration of a functioning e-commerce website
            designed to sell and distribute Gundam model kits for a hobbyist.
            Through various methods used, a user can simulate adding items to a
            cart, proceeding with purchase with price and taxes in mind, which
            leads to a order confirmation with a confirmation number. This
            project is continuously updated.
          </p>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>Material UI</li>
          </ul>
          <ul>
            <li><a href="https://gunpla-galaxy.netlify.app/">Visit Page</a></li>
            <li><a href="https://github.com/Adrick1210/Gunpla-front">Frontend Code</a></li>
            <li><a href="https://github.com/Adrick1210/Gunpla-backend">Backend Code</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Projects;

import "./index.css";

const Projects = () => {
  return (
    <div>
      <h1 className="projects-head">Projects</h1>
      <div className="project-con">
        <div className="project-container-text">
          <h1 className="project-head">Project Name</h1>
          <p className="project-text">
            I created this personal project in order to show
            <br />
            how to create an interface in Figma using a portfolio
            <br />
            as an example.
          </p>
          <button className="view">view project</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/do6jds4io/image/upload/v1704425147/mf75a0wzuaxlmzbtnshb.png"
            alt="img1"
            className="yoga-image"
          />
        </div>
      </div>
      <div className="project-con">
        <div>
          <img
            src="https://res.cloudinary.com/do6jds4io/image/upload/v1704426501/fdgtpontysiglaeyuqlt.png"
            alt="img1"
            className="calculator-image"
          />
        </div>
        <div className="project-container-text2">
          <h1 className="project-head">Project Name</h1>
          <p className="project-text">
            What was your role, your deliverables, if the
            <br />
            project was personal, freelancing.
          </p>
          <button className="view">view project</button>
        </div>
      </div>
      <div className="project-con">
        <div className="project-container-text3">
          <h1 className="project-head">Project Name</h1>
          <p className="project-text">
            You can also add in this description the type of the
            <br />
            project, if it was for web, mobile, electron.
          </p>
          <button className="view">view project</button>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/do6jds4io/image/upload/v1704426693/nivcibh9vuofiekpqpw0.png"
            alt="img1"
            className="yoga-image"
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;

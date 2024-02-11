import Project from "../components/project";
import projectData from "./data/projects";

function Portfolio() {
  return (
    <>
      <div className="container page-header">
        <h1>Portfolio</h1>
      </div>
      <div className="row d-flex flex-wrap justify-content-center pt-5">
        {projectData.map((data, index) => (
          <Project
            key={index} // Ensure each component has a unique key
            imageSrc={data.imageSrc}
            title={data.title}
            description={data.description}
            github={data.github}
            deployed={data.deployed}
          />
        ))}
      </div>
    </>
  );
}

export default Portfolio;

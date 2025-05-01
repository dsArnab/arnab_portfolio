import React from "react";
import banner from "../assets/banner.jpg";
import { webprojectList } from "../components/Projectlist";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-full">
      <div className="banner">
        <img src={banner} alt="banner" />
      </div>

      <div className="heading">
      <h1>Web Development Projects</h1>
      </div>

      <div className="projects">
        {webprojectList.map((project, index) => (
          <div className="project-detail" key={index}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>

            <div className="project-images">
              {/* Replace these placeholders with your actual selected images for each project */}
              <div className="imgage1">
              <img src={project.image} alt={`${project.title} view 1`} /> 
              </div>

              <div className="image23">
              <img src={project.image2} alt={`${project.title} view 2`} />
              <img src={project.image3} alt={`${project.title} view 3`} />
              </div>
            </div>

            <div className="key-features">
              <h3>Key Features:</h3>
              <ul>
                {project.keyfeatures?.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
import React from "react";
import projects from "../data/projects";

const Projects = () => (
  <div>
    <h1> Projects </h1>
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h2>{project.name}</h2>
          <img src={project.image} alt={project.name} />
          <p>{project.description}</p>
          <a href={project.url}> Projects!</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Projects;
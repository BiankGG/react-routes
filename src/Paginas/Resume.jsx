import React from "react";
import { studies, experiences } from "../data/resume";

const Resume = () => (
  <div>
    <h1> Work Experience</h1>
    <ul>
      {experiences.map((experience) => (
        <li key={experience.id}>
          <h2>{experience.title}</h2>
          <p>{experience.company}</p>
          <p>{experience.date}</p>
        </li>
      ))}
    </ul>
    <h1>Education</h1>
    <ul>
      {studies.map((study) => (
        <li key={study.id}>
          <h2>{study.title}</h2>
          <p>{study.institution}</p>
          <p>{study.date}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Resume;
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to my Portfolio</h1>
      <p>
        I am transitioning into a web development career, currently
        participating in a Full Stack Developer bootcamp. I'm gaining skills in
        HTML, CSS, JavaScript, React, and Node.js. My background as a groupWeb
        and in loss prevention has equipped me with strong leadership, team
        management, and problem-solving skills.
      </p>
      <nav>
        <Link to="/Projects">Projects</Link>
        <Link to="/Resume"> Resume</Link>
      </nav>
    </div>
  );
};

export default Home;

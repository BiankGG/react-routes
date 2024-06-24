import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/Paginas/Home";
import Projects from "../src/Paginas/Projects";
import Resume from "../src/Paginas/Resume";

function App() {
    return(
  <div>
    <Router>
      <header>
        <h1>Portofolio</h1>
        <nav>
          <Link to="/">Start</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Resume"> CV</Link>
        </nav>
      </header>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </section>
    </Router>
  </div>
  )
}

export default App;

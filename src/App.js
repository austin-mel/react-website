import './App.css';
import React from "react";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import { Route, HashRouter, Routes } from "react-router-dom";

function App() {

  return (
    <HashRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/resume" element={<Resume />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
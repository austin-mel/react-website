import './App.css';
import 'animate.css';
import React from "react";
import Home from "./pages/home";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import { Route, HashRouter, Routes } from "react-router-dom";
import Format from './pages/format';

function App() {
  return (
    <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/resume" element={<Resume />}></Route>
            <Route exact path="/projects" element={<Projects />}></Route>
            <Route exact path='/format' element={<Format />}></Route>
          </Routes>
    </HashRouter>
  );
}

export default App;
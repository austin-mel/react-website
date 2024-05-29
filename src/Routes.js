import './App.css';
import { useState } from 'react';
import Home from "./pages/index";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Projects from "./pages/projects";

function App() {
  const [page, setPage] = useState(false);

  return (
    <Home />
  );
}

export default App;
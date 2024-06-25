import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div class="navbar">
            <NavLink to="/">Home</NavLink>  
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </div>
    );
};

export default Navbar
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div class="topnav">
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/">Home</NavLink>  
        </div>
    );
};

export default Navbar
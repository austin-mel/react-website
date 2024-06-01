import { NavLink } from "react-router-dom";
import Logo from "./logo.png";

const Navbar = () => {
    return(
        <div class="topnav">
            <div class="logo">
                <img src={Logo} alt="Logo" width="45px" height="45px"></img>
            </div>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/">Home</NavLink>  
        </div>
    );
};

export default Navbar
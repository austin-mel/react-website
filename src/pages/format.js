import React from "react";
import Logo from "../components/images/transparent_logo.png";
import Signature from "../components/images/transparent_signature.png";
import CSUSLogo from "../components/images/CSUSLogo.jpg"
import Navbar from "../components/Navbar";
import Form from "../components/Home/contactForm";
import Footer from "../components/Footer";
import "../styles/Test.css";


function Format() {
    return (
        <>
        <header>
            <div className="header">
                <img className="logo" src={Logo} alt="Logo"></img>
                <img className="signature" src={Signature} alt="Signature" height="500px" width="500px"></img>
                <Navbar />
                <div className="triangle"></div>
                <div className="phonenav"></div>
            </div>
        </header>
        <body>
        <div className="section first">
            <div id="headshot" className="headshot"></div>
            <div className="star-eight">
                <p className="star-text">My name is Austin Melendez. <br/><br/> I'm double majoring in Computer Science and Statistics with an interest in Data Science and Analytics. <br/><br/>
                                    I'm currently studying at California State University Sacramento and will be graduating in 2026.</p>
            </div>
            <div class="arrow-box">
                <h2 class="arrow-text">Hello There!</h2>
            </div>
            <img className="csuslogo" src={CSUSLogo} alt="CSUS Logo" height="200px" width="200px"></img>
        </div>
        <div className="section second">
            <div className="polygon-banner"><h2>Get In Touch!</h2></div>
            <div className="bubble">
                <Form />
            </div>
            <div className="burst-12">
                <p className="burst-text">Have a question? Interested in learning more about my skills?<br/> 
                    The fastest way to get a hold of me is to <a href="mailto:austin.mel@mail.com">email me.</a><br/><br/>
                    Alternatively, you can fill out the provided contact form.<br/><br/>
                    You can also message me directly through my <a href="https://www.linkedin.com/in/austin-melendez/">LinkedIn</a> page.</p>
            </div>
        </div>
        <div className="section third">
            <div className="circle projects">
                <h3 className="circle-text projects">View my<br/>featured<br/>projects</h3>
            </div>
            <div className="circle resume">
                <h3 className="circle-text resume">View my<br/>current<br/>resume</h3>
            </div>
            <div className="triangle-bottom"></div>
        </div>
        </body>
        <footer>
            <Footer/>
        </footer>
        </>
    );
};

export default Format;
import React from "react";
import Logo from "../components/images/transparent_logo.svg";
import Signature from "../components/images/transparent_signature.png";
import CSUSLogo from "../components/images/CSUSLogo.jpg"
import Navbar from "../components/Navbar";
import Form from "../components/Home/contactForm";
import Footer from "../components/Footer";
import 'animate.css';


function Home() {
    function openResume() {
        window.open("http://www.austinmelendez.com/#/resume", "_self");
    };

    function openProjects() {
        window.open("http://www.austinmelendez.com/#/projects", "_self");
    };

    return (
        <>
            <header>
                <link rel="stylesheet" href="../styles/Home.css"></link>
                <div className="header">
                    <div className="triangle"></div>
                    <Navbar />
                    <div className="phonenav"></div>
                </div>
            </header>
            <div className="body">
                <main>
                    <section className="section first">
                        <img className="signature" src={Signature} alt="Signature" height="500px" width="500px"></img>
                        <div className="triangle"></div>
                        <img className="logo" src={Logo} alt="Logo"></img>
                        <div id="headshot" className="headshot"></div>
                        <div className="arrow">
                            <h2>Hello there!</h2>
                        </div>
                        <div className="star-8">
                            <p>My name is Austin Melendez. <br /><br /> I'm double majoring in Computer Science and Statistics with an interest in Data Science and Analytics. <br /><br />
                                I'm currently studying at California State University Sacramento and will be graduating in 2026.</p>
                        </div>
                        <img className="csuslogo" src={CSUSLogo} alt="CSUS Logo" height="200px" width="200px"></img>
                    </section>
                    <section className="section second">
                        <div className="blob">
                            <h3>Get in touch!</h3>
                        </div>
                        <div className="starburst">
                            <p>Have a question? Interested in learning more about my skills?<br />
                                The fastest way to get a hold of me is to <a href="mailto:austin.mel@mail.com">email me.</a><br /><br />
                                Alternatively, you can fill out the provided contact form.<br /><br />
                                You can also message me directly through my <a href="https://www.linkedin.com/in/austin-melendez/">LinkedIn</a> page.</p>
                        </div>
                    </section>
                    <section className="section third">
                        <div className="arrow-1"></div>
                        <div className="spbubble">
                            <Form />
                        </div>
                    </section>
                    <section className="section fourth">
                        <div className="circle projects" onClick={openProjects}>
                            <h3>View my<br />featured<br />projects</h3>
                        </div>
                        <div className="circle resume" onClick={openResume}>
                            <h3>View my<br />current<br />resume</h3>
                        </div>
                    </section>
                </main>
            </div>
            <footer>
                <Footer />
                <div className="triangle-bottom"></div>
            </footer>
        </>
    );
};

export default Home;
import '../App.css';
import Navbar from '../components/Navbar';
import { useState } from 'react';


function Project1(){
    return (
    <div>
        <div class="content">
            <div class="row">
                <div class="column hlf">
                    <h2>Pharmaceutical Trial Progress Tracker</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                </div>
                <div class="column hlf">
                    <h3 class="demobtn"><a href="#test">View Demo</a></h3>
                </div>
            </div>
            <div class="row">
                <h2>Project Files</h2>
            </div>
            <div class="row">
                <p>Content & Files</p>
            </div>
        </div>
    </div>
    );
};

function Project2(){
    return (
    <div>
        <div class="content">
            <div class="row">
                <div class="column hlf">
                    <h2>Weather Data Analysis</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                </div>
                <div class="column hlf">
                    <h3 class="demobtn"><a href="#test">View Demo</a></h3>
                </div>
            </div>
            <div class="row">
                <h2>Project Files</h2>
            </div>
            <div class="row">
                <p>Content & Files</p>
            </div>
        </div>
    </div>
    );
};

function Project3(){
    return (
    <div>
        <div class="content">
            <div class="row">
                <div class="column hlf">
                    <h2>Python Chatroom & Machine Learning</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                </div>
                <div class="column hlf">
                    <h3 class="demobtn"><a href="#test">View Demo</a></h3>
                </div>
            </div>
            <div class="row">
                <h2>Project Files</h2>
            </div>
            <div class="row">
                <p>Content & Files</p>
            </div>
        </div>
    </div>
    );
};

function Projects(){
    const [project, setProject] = useState("project1");
    const switchProject1 = () => {
        setProject("project1")
    }
    const switchProject2 = () => {
        setProject("project2")
    }
    const switchProject3 = () => {
        setProject("project3")
    }

    return(
        <div>
            <Navbar />
            {project === "project1" ? (
                <div>
                    <div class="projnav">
                        <h2>Quick Navigation</h2>
                        <button onClick={switchProject1}>Pharmaceutical Trial</button>
                        <button onClick={switchProject2}>Weather Data Analytics</button>
                        <button onClick={switchProject3}>Python Chatroom</button>
                    </div>
                    <Project1 />
                </div>
            ) : project === "project2" ? (
                <div>
                    <div class="projnav">
                        <h2>Quick Navigation</h2>
                        <button onClick={switchProject1}>Pharmaceutical Trial</button>
                        <button onClick={switchProject2}>Weather Data Analytics</button>
                        <button onClick={switchProject3}>Python Chatroom</button>
                    </div>
                    <Project2 />
                </div>
            ): project === "project3" ? (
                <div>
                    <div class="projnav">
                        <h2>Quick Navigation</h2>
                        <button onClick={switchProject1}>Pharmaceutical Trial</button>
                        <button onClick={switchProject2}>Weather Data Analytics</button>
                        <button onClick={switchProject3}>Python Chatroom</button>
                    </div>
                    <Project3 />
                </div>
            ) : (
                <h1>Error. Page not found.</h1>
            )}
            <div class="footer">
                <p><a href="https://github.com/austin-mel">GitHub</a> | <a href="https://www.linkedin.com/in/austin-melendez/">LinkedIn</a> | Austin Melendez 2023 © </p>
            </div>
        </div>
    );
};

export default Projects;

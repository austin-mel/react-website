import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import Project1 from "../components/Projects/Pharma";
import Project2 from "../components/Projects/Weather";
import Project3 from "../components/Projects/MLTweets";


function Projects() {
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
        <div class="content">
            {project === "project1" ? (
                <div class="row">
                    <div class="projnav">
                        <h2>Available Projects</h2>
                        <button onClick={switchProject1}>Pharmaceutical Trial</button>
                        <button onClick={switchProject2}>Weather Data Analytics</button>
                        <button onClick={switchProject3}>ML in Russian Bot Tweets</button>
                    </div>
                    <Project1 />
                </div>
            ) : project === "project2" ? (
                <div class="row">
                    <div class="projnav">
                        <h2>Available Projects</h2>
                        <button onClick={switchProject1}>Pharmaceutical Trial</button>
                        <button onClick={switchProject2}>Weather Data Analytics</button>
                        <button onClick={switchProject3}>ML in Russian Bot Tweets</button>
                    </div>
                    <Project2 />
                </div>
            ): project === "project3" ? (
                <div class="row">
                    <div class="projnav">
                        <h2>Available Projects</h2>
                        <button onClick={switchProject1}>Pharmaceutical Trial</button>
                        <button onClick={switchProject2}>Weather Data Analytics</button>
                        <button onClick={switchProject3}>ML in Russian Bot Tweets</button>
                    </div>
                    <Project3 />
                </div>
            ) : (
                <div class="row">
                    <div class="projnav">
                        <h2>Quick Navigation</h2>
                        <button onClick={switchProject1}>Pharmaceutical Trial</button>
                        <button onClick={switchProject2}>Weather Data Analytics</button>
                        <button onClick={switchProject3}>ML in Russian Bot Tweets</button>
                    </div>
                    <h1>Error!</h1>
                    <h3>Oops! Project not found.</h3>
                </div>
            )}
        </div>
            <Footer />
        </div>
    );
};

export default Projects;

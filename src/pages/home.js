import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from '../components/Home/contactForm';
import CSUSLogo from "../components/Home/CSUSLogo.jpg";
import Headshot from "../components/Home/headshot.jpg";

function Home(){
    return(
        <div>
            <Navbar />
        <div class="content">
            <div class="row">
                <div class="column qtr">
                    <div class="headshot">
                        <img src={Headshot} alt="Headshot" height="200px" width="200px"></img>
                    </div>
                </div>
                <div class="column hlf">
                    <h2>Hello There!</h2>
                    <p>My name is Austin Melendez. I'm a student studying Computer Science with an interest in Data Science and Analytics.</p>
                    <p>I am currently studying at California State University Sacramento and will be graduating in 2025.</p>
                    <p>I am eager to gain experience and learn more about the field through interships and volunteer oppourtunities. Please reach out to me if you are interested in working with me!</p>
                    <p>Feel free to check out my featured projects, GitHub page, and resume to gain an understanding of my skill set.</p>
                </div>
                <div class="column qtr">
                    <div class="csuslogo">
                        <img src={CSUSLogo} alt="CSUS Logo" height="200px" width="200px"></img>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="column hlf">
                    <br/>
                    <h2>Get In Touch</h2>
                    <p>Have a question? Interested in learning more about my skills?</p>
                    <p>The fastest way to get a hold of me is to <a href="mailto:austin.mel@mail.com">email me.</a></p><br/>
                    <p>Alternatively, you can fill out the provided contact form.</p>
                    <p>You can also message me directly through my <a href="https://www.linkedin.com/in/austin-melendez/">LinkedIn</a> page.</p>
                </div>
                <div class="column hlf">
                    <Form />
                </div>
            </div>
        </div>
            <Footer />
        </div>
    );
};

export default Home;

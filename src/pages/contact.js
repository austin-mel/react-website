import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Form from "../components/Contact/contactForm";

function Contact(){
    return(
        <div>
            <Navbar />
        <div class="content">
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

export default Contact;

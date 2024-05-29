import '../App.css';
import Navbar from '../components/Navbar';

function Contact(){
    return(
        <div>
            <Navbar />
        <div class="content">
            <div class="row">
                <div class="column thrd">
                    <h2>Get In Touch</h2>
                    <p>Have a question? Interested in learning more about my skills? The fastest way to get a hold of me is to <a href="mailto:austin.mel@mail.com">email me.</a></p>
                    <p>Additionally, you can fill out the provided contact form.</p>
                    <p>You can also message me through my <a href="https://www.linkedin.com/in/austin-melendez/">LinkedIn</a> page.</p>
                </div>
                <div class="column twthrd">
                    <div class="contact">
                        <p>FORM</p>
                        <label for="name">Name:</label>
                        <input id="name" name="name"/><br/>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email"/><br/>
                        <label for="text">Message:</label>
                        <textarea id="text" name="text"></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <p><a href="https://github.com/austin-mel">GitHub</a> | <a href="https://www.linkedin.com/in/austin-melendez/">LinkedIn</a> | Austin Melendez 2023 © </p>
        </div>
        </div>
    );
};

export default Contact;

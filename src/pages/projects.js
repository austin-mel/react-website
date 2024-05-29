import '../App.css';
import Navbar from '../components/Navbar';

function Projects(){
    return(
        <div>
            <Navbar />
        <div class="content">
            <div class="row">
                <div class="column hlf">
                    <h2>Project Description</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
                </div>
                <div class="column hlf">
                    <h2>Quick Navigation</h2>
                    <button>Pharmaceutical Trial</button><br/>
                    <button>Weather Data Analytics</button><br/>
                    <button>Python Chatroom</button><br/>
                </div>
            </div>
            <div class="row">
                <h3><a href="#test">Launch Demo</a></h3>
            </div>
            <div class="row">
                <h2>Project Files</h2>
            </div>
        </div>
        <div class="footer">
            <p><a href="https://github.com/austin-mel">GitHub</a> | <a href="https://www.linkedin.com/in/austin-melendez/">LinkedIn</a> | Austin Melendez 2023 © </p>
        </div>
        </div>
    );
};

export default Projects;

import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Resume(){
    return(
        <div>
            <Navbar />
        <div class="content">
                <h2>Current Resume</h2>
                <p>INSERT DOWNLOAD ICON</p>
                <p>Last updated: 5/30/2024</p>
                <iframe class="resume" title="resume" src="https://docs.google.com/document/d/e/2PACX-1vS7WsmVeRt7wfdx55Z2PBQu04hK3O3-c_08_QSYZmU8PjjdIytJZvEfTLv9UXV5NMW8CeL2lfMaumiU/pub?embedded=true"></iframe>
        </div>
            <Footer />
        </div>
    );
};

export default Resume;

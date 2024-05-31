import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Resume(){
    const handleDownload = () => {
        const pdfURL = "resume.pdf";
        const link = document.createElement("a");
        link.href = pdfURL;
        link.download = "AustinMelendez-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
            <Navbar />
        <div class="content">
                <h2>Current Resume</h2>
                <button onClick={handleDownload}><span class="material-symbols-outlined">download</span></button>
                <p>Last updated: 5/30/2024</p>
                <iframe class="resume" title="resume" src="https://docs.google.com/document/d/e/2PACX-1vS7WsmVeRt7wfdx55Z2PBQu04hK3O3-c_08_QSYZmU8PjjdIytJZvEfTLv9UXV5NMW8CeL2lfMaumiU/pub?embedded=true"></iframe>
        </div>
            <Footer />
        </div>
    );
};

export default Resume;

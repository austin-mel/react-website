import React from "react";
import Logo from "../components/images/transparent_logo.svg";
import Signature from "../components/images/transparent_signature.png";
import CSUSLogo from "../components/images/CSUSLogo.jpg"
import Navbar from "../components/Navbar";
import Form from "../components/Home/contactForm";
import Footer from "../components/Footer";
import "../styles/Home.css";


function Format() {
    
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
                <section className="section first">
                    <img className="signature" src={Signature} alt="Signature" height="500px" width="500px"></img>
                    <div className="triangle"></div>
                    <img className="logo" src={Logo} alt="Logo"></img>
                </section>
            </div>
            <footer>
                <Footer />
                <div className="triangle-bottom"></div>
            </footer>
        </>
    );
};

export default Format;
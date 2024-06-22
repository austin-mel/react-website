import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import ReCAPTCHA from 'react-google-recaptcha';

function Form() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const captchaRef = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        const token = captchaRef.current.getValue();
        const serviceID = "service_vwd3xmf";
        const templateID = "template_vldm5ty";
        const publicKey = "BtNF6QTg5ljYoh2ya";

        const templateParams = {
            from_email: email,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((response) => {
                console.log("SUCCESS!", response);
                setEmail("");
                setSubject("");
                setMessage("");
            })
            .catch((error) => {
                console.log("FAILED!", error)
            });
        
        captchaRef.current.reset();
    }   

    return (
        <div>
            <form action="?" className="contactform" onSubmit={sendEmail}>
                <label for="email">Your Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>

                <label for="subject">Subject:</label>
                <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/><br/>
                        
                <label for="message">Message:</label>
                <textarea type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br/>
                <div class="recaptcha">
                    <ReCAPTCHA sitekey="6LeHne4pAAAAACEFxSLX_94oxa6f5rr0Pm2MlA3X" ref={captchaRef} />
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
};

export default Form;
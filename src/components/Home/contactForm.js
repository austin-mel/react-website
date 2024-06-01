import emailjs from "@emailjs/browser";
import React, { useState } from "react";

function Form() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

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

    }   

    return (
        <form class="contactform" onSubmit={sendEmail}>
            <label for="email">Your Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/><br/>

            <label for="subject">Subject:</label>
            <input type="text" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required/><br/>
                        
            <label for="message">Message:</label>
            <textarea type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea><br/>

            <button type="submit">Send Email</button>
        </form>
    );
};

export default Form;
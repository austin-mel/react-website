function Form() {
    return (
        <div class="contactform">
            <label for="email">Your Email:</label>
            <input type="email" id="email" name="email"/><br/>

            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject"/><br/>
                        
            <label for="message">Message:</label>
            <textarea type="text" id="message" name="message"></textarea><br/>

            <button>Send Email</button>
        </div>
    );
};

export default Form;
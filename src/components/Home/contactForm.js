function Form() {
    return (
        <div class="contactform">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"/><br/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email"/><br/>
                        
            <label for="message">Message:</label>
            <textarea type="text" id="message" name="message"></textarea><br/>

            <button>Send Email</button>
        </div>
    );
};

export default Form;
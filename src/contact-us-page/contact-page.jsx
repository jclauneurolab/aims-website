import React, {useState} from 'react';
import './contact-page.css';

const ContactPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contactData = {
            name,
            email,
            message,
        };

        console.log(contactData);

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='contactPage'>
            <div className='contact-us-title'>
                Contact Us
            </div>
            <div className='contact-cont'>
                <div className='message-cont'>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <div className="contact-form-field">
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="contact-form-field">
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>

                        <div className="contact-form-field">
                            <label htmlFor="message">Message:</label>
                            <textarea 
                                id="message" 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                                required 
                            />
                        </div>

                        <button type="submit" className="contact-submit-btn">Submit</button>
                    </form>
                </div>
                <div className='picture-cont'>
                    <img></img>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
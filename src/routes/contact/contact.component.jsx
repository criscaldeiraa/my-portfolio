import React, { useState } from "react";
import * as emailjs from "emailjs-com";
import { contactConfig } from "../../content";
import { ReactComponent as Linkedin } from '../../assets/images/linkedin.svg';
import { ReactComponent as Github } from '../../assets/images/github.svg';


import './contact.styles.css';

const Contact = () => {
    const [formData, setFormdata] = useState({
        email: "",
        name: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
    });
        
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormdata({ loading: true });
        
    const templateParams = {
        from_name: formData.email,
        user_name: formData.name,
        to_name: contactConfig.YOUR_EMAIL,
        message: formData.message,
    };
        
    emailjs
        .send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
        )
        .then(
        (result) => {
            console.log(result.text);
            setFormdata({
            loading: false,
            alertmessage: "SUCCESS! Thank you for your messege",
            variant: "success",
            show: true,
            });
        },
        (error) => {
            console.log(error.text);
            setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
            });
            document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
        );
    };
        
    const handleChange = (e) => {
    setFormdata({
        ...formData,
        [e.target.name]: e.target.value,
    });
    };

    return (
    <div className="contact-page">
        <div className="contact-container">
            <div>
                <h1>Get in touch</h1>
                <hr className="underline" />
            </div>
        </div>
        <div>
            <div className="contact-flex">
                <div className="contact-info">
                    <p className="info-text">{contactConfig.description}</p>
                    <address>
                        <p><strong>Email:</strong>{" "}{contactConfig.YOUR_EMAIL}</p>
                        <br />
                        <p><strong>Phone:</strong> {contactConfig.YOUR_FONE}</p>
                        <br />
                    </address>
                    <div className='social-icons'>
                        <a href='www.linkedin.com/in/criscaldeirat'>
                            <Linkedin className='social-icon' />
                        </a>
                        <a href='https://github.com/criscaldeiraa'>
                            <Github className='social-icon' />
                        </a>
                    </div>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div>
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name || ""}
                                    type="text"
                                    required
                                    onChange={handleChange}
                                />
                                </div>
                            <div className="form-group">
                                <input
                                    className="form-input"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email || ""}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <textarea
                            className="form-input"
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <br />
                        <div>
                            <div className="">
                                <button className="btn ac_btn" type="submit">
                                    {formData.loading ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            <div className={formData.loading ? "loading-bar" : "d-none"}></div>
        
    </div>
    )
};

export default Contact;
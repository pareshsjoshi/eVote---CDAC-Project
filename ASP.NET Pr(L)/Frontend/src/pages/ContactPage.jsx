import React, { useState } from 'react';
import '../stylesheets/ContactPage.css';
import { Navigate, useNavigate } from 'react-router-dom';

function ContactUs() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        queryType: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form Submitted\nQuery Type: ${formData.queryType}\nMessage: ${formData.message}`);
        setFormData({
            name: '',
            email: '',
            message: '',
            queryType: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleOnClick = () => {
        navigate('/payment');
    }

    return (
        <div className="contact-page">
            <h1 className="text-center mb-4">Contact Us</h1>
            <div className="contact-container">
                <div className='side-container'>
                    {/* Google Map */}
                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965737.5720536517!2d73.28937044687498!3d19.001541300000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1732381552691!5m2!1sen!2sin"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="button-container mt-2">
                        <button type='button' className="btn btn-warning" onClick={handleOnClick}>Buy us a coffee!</button>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-container">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                id="message"
                                name="message"
                                rows="4"
                                placeholder="Enter your message"
                                required
                                value={formData.message}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="queryType" className="form-label">Query Type</label>
                            <select
                                className="form-control"
                                id="queryType"
                                name="queryType"
                                required
                                value={formData.queryType}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Query Type</option>
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Technical Support">Technical Support</option>
                                <option value="Feedback">Feedback</option>
                                <option value="Billing Support">Billing Support</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-warning">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;


{/* CSS Styles */ }
{/* <style>
    {`
        .contact-page {
            // background-color: rgba(229, 220, 89, 0.81);
            // padding: 20px;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .cp-container {
            // max-width: 800px;
            background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .map-container iframe {
            border-radius: 10px;
        }

        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }

        .form-control {
            border-radius: 5px;
        }

        h1 {
            color: #333;
        }
    `}
</style> */}

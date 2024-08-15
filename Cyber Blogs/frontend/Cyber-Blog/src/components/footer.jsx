import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Company Info */}
                <div className="footer-info">
                    <h2 className="footer-logo">BLOG-WEBSITE</h2>
                    <p className="footer-description">
                        Your company’s description or slogan goes here. Brief and to the point.
                    </p>
                </div>

                {/* Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                    <p>Phone: <a href="tel:+1234567890">+123 456 7890</a></p>
                </div>

                {/* Social Media */}
                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

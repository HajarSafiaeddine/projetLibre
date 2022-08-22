import React from 'react'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                </div>
                <div className='col'>
                    <h5>Support</h5>
                    <span className='bar'></span>
                        <a href='/'>Contact Us</a>
                        <a href='/'>Help</a>

                </div>
                <div className='col'>
                    <h5>Tools</h5>
                    <span className='bar'> </span>
                        <a href='/'>Products</a>
                   
                </div>
                <div className='col'>
                    <h5>About us</h5>
                    <span className='bar'> </span>
                        <a href='/'>Information</a>
                        <a href='/'>Legal</a>
                        <a href='/'>Privacy</a>
                </div>
                <div className='col'>
                    <h5>Social Media</h5>
                    <span className='bar'> </span>
                        <a href='/'><FaFacebook className='icon'/></a>
                        <a href='/'><FaTwitter className='icon'/></a>
                        <a href='/'><FaLinkedin className='icon'/></a>
                        <a href='/'><FaGithub className='icon'/></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
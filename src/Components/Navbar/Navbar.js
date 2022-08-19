import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import logo from '../../assets/logo.png';
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);


    return (
        <div className='header'>
            <div className='container'>
                <img src={logo} width='120px' />
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/Home'>Home</a>
                    </li>
                    <li>
                        <a href='/Bitcoin'>Coins</a>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#FFFFFF'}}/>) : (<FaBars size={20} style={{color: '#FFFFFF'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar

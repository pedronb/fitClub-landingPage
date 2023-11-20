import React from 'react';
import './Footer.css';
import gitHub from '../../assets/github.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';

export const Footer = () => {
    return (
        <div className="Footer">
            <hr />
            <div className="logos">
                <img src={gitHub} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" />
            </div>
            <img src={Logo} alt="" className='logo'/>
            <div className="blur blur-f-1" />
            <div className="blur blur-f-2" />
        </div>
    )
}
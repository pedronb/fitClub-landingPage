import React, { useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'; 

export const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const mobile = window.innerWidth <= 768 ? true : false;

    return (
        <div className="header">
            <img src={Logo} alt="" className='logo'/>
            {mobile && menuOpened === false ? (
                <div onClick={() => setMenuOpened(true)}>
                    <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }}/>
                </div>
            ) : (
                <ul className='header-menu'>
                    <li><Link to='hero' spy={true} smooth={true} onClick={() => setMenuOpened(false)}>Home</Link></li>
                    <li><Link to='programs' spy={true} smooth={true} onClick={() => setMenuOpened(false)}>Programs</Link></li>
                    <li><Link to='reasons' spy={true} smooth={true} onClick={() => setMenuOpened(false)}>Why us</Link></li>
                    <li><Link to='plans' spy={true} smooth={true} onClick={() => setMenuOpened(false)}>Plans</Link></li>
                    <li><Link to='testimonials' spy={true} smooth={true} onClick={() => setMenuOpened(false)}>Testimonials</Link></li>
                </ul>
            )}

        </div>
    )
}

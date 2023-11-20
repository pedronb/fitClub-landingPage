import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

export const Testimonials = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const tLength = testimonialsData.length;
    const transition = {type: 'spring', duration: 3}

    return (
        <div className="testimonials-container" id='testimonials'>
            <div className="left-t">
                <span className='testimonials-header'>testimonials</span>
                <span className='stroke-text'>What they</span>
                <span >Say about us</span>

                <motion.span key={selectedIndex} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 100}} transition={transition}>
                    {testimonialsData[selectedIndex].review}
                </motion.span>
                <span>
                    <span style={{ color: "var(--orange)" }}>
                        {testimonialsData[selectedIndex].name}
                    </span>{" "}
                    - {testimonialsData[selectedIndex].status}
                </span>
            </div>

            <div className="right-t">
                <motion.div initial={{opacity: 0, x: -100}} transition={{...transition, duration: 2}} whileInView={{opacity: 1, x: 0}} />
                <motion.div initial={{opacity: 0, x: 100}} transition={{...transition, duration: 2}} whileInView={{opacity: 1, x: 0}}/>
                <motion.img key={selectedIndex} initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} transition={transition} src={testimonialsData[selectedIndex].image} alt="" />

                <div className='arrows'>
                    <img 
                        src={leftArrow} 
                        alt="" 
                        onClick={() => {selectedIndex === 0 ? setSelectedIndex(tLength -1) : setSelectedIndex(prev => prev -1)}}
                    />
                    <img 
                        src={rightArrow} 
                        alt="" 
                        onClick={() => {selectedIndex === tLength -1 ? setSelectedIndex(0) : setSelectedIndex(prev => prev +1)}}
                    />
                </div>
            </div>
           
        </div>
    )
}
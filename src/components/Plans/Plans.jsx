import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

export const Plans = () => {
    return (
        <div className="Plans" id='plans'>
            {/* plans header */}
            <div className="blur plans-blur-1" />
            <div className="blur plans-blur-2" />
            <div className='plans-header'>
                <span className='stroke-text'>Ready to start</span>
                <span>Your jorney</span>
                <span className='stroke-text'>Now withus</span>
            </div>
            {/* plans cards */}
            <div className="plans-cards">
                {plansData.map((plan, index) => (
                    <div className='plans-card-unique' key={index}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className='features'>
                            {plan.features.map((feature, index) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={index}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benefits -></span>
                        </div>
                        <button className='btn'>Join now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
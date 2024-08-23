import React from 'react';
import './herobanner.scss';
import herobanner from '../../../assets/assets/herobanner.jpg'

export default function Herobanner() {
    return (
        <div className="herobanner">
            <div className="container">
                <div className="herobanner1">
                    <div className="herobanner-img">
                        <img src={herobanner} alt="herobanner" />
                    </div>
                    <div className="blur"></div>
                    <div className="text">
                        <h1>Welcome To Vogue-DashClothing</h1>
                        <p>Where Style Meets Comfort</p>
                        <button>Enjoy Your Shopping</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

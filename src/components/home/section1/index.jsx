import React from 'react'
import './section1.scss'
import upperimage1 from '../../../assets/images/upperimage1.jpeg';
import upperimage2 from '../../../assets/images/upperimage2.jpeg';
import upperimage3 from '../../../assets/images/upperimage3.jpeg';
import upperimage4 from '../../../assets/images/upperimage4.jpeg';


export const upperimage = [
    { id: 101, image: upperimage1 },
    { id: 102, image: upperimage2 },
    { id: 103, image: upperimage3 },
    { id: 104, image: upperimage4 },

]

export default function Section1() {



    return (
        <div>

            {upperimage.map(upperimage => (
                <div
                    key={upperimage}
                    className="upperimage"
                >
                    <div className="upper-img">
                        <img src={upperimage.image} alt={upperimage.name} />
                    </div>

                </div>
            ))}
        </div>
    )
}

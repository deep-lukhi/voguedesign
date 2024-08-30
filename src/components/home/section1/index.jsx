import React from 'react'
import './section1.scss'
import upperimage1 from '../../../assets/images/upperimage1.jpeg';
import upperimage2 from '../../../assets/images/upperimage2.jpeg';
import upperimage3 from '../../../assets/images/upperimage3.jpeg';
import upperimage4 from '../../../assets/images/upperimage4.jpeg';
import upperimage5 from '../../../assets/images/upperimage5.jpeg';
import upperimage6 from '../../../assets/images/upperimage6.jpeg';
import upperimage7 from '../../../assets/images/upperimage7.jpeg';
import upperimage8 from '../../../assets/images/upperimage8.jpeg';
import upperimage9 from '../../../assets/images/upperimage9.jpeg';
import upperimage10 from '../../../assets/images/upperimage10.jpeg';


export const upperimage = [
    { id: 101, image: upperimage1, name: "gown made with faux", price: "RS.1550", deleteprice: "RS.1999" },
    { id: 102, image: upperimage2, name: "gown made with faux", price: "RS.1550", deleteprice: "RS.1999" },
    { id: 103, image: upperimage3, name: "gown made with faux", price: "RS.1550", deleteprice: "RS.1999" },
    { id: 104, image: upperimage4, name: " pakistani style lights ", price: "RS.1720", deleteprice: "RS.2199" },
    { id: 105, image: upperimage5, name: "💃🏻Navratri Collections-2024 🤳", price: "RS.1400", deleteprice: "RS.1999" },
    { id: 106, image: upperimage6, name: "💃🏻Navratri Collections-2024 🤳", price: "RS.1400", deleteprice: "RS.1999" },
    { id: 107, image: upperimage7, name: "💃🏻Navratri Collections-2024 🤳", price: "RS.1400", deleteprice: "RS.1999" },
    { id: 108, image: upperimage8, name: "Mehera Green Floral Alia Cut Suit Set", price: "RS.1360", deleteprice: "RS.1949" },
    { id: 109, image: upperimage9, name: " PREMIUM READYMADE GOWN", price: "RS.1400", deleteprice: "RS.1999" },
    { id: 110, image: upperimage10, name: " PREMIUM READYMADE GOWN", price: "RS.1400", deleteprice: "RS.1999" },

]

export default function Section1() {



    return (
        <div className='section'>

            {upperimage.map(upperimage => (
                <div
                    key={upperimage}
                    className="upperimage"
                >
                    <div className="upper-img">
                        <img src={upperimage.image} alt={upperimage.name} />
                    </div>
                    <div className="details">
                        <h4>{upperimage.name}</h4>
                        <p><del>{upperimage.deleteprice}</del> {upperimage.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

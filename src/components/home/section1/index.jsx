import React, { useState } from 'react'
import './section1.scss'
import upperimage1 from '../../../assets/images/upperimage1.jpeg';
import innerimage1 from '../../../assets/images/innerimage1.jpeg';
import innerimage1a from '../../../assets/images/innerimage1a.jpeg';
import innerimage1b from '../../../assets/images/innerimage1b.jpeg';
import innerimage1c from '../../../assets/images/innerimage1c.jpeg';
import innerimage1d from '../../../assets/images/innerimage1d.jpeg';
import upperimage2 from '../../../assets/images/upperimage2.jpeg';
import upperimage3 from '../../../assets/images/upperimage3.jpeg';
import upperimage4 from '../../../assets/images/upperimage4.jpeg';
import upperimage5 from '../../../assets/images/upperimage5.jpeg';
import upperimage6 from '../../../assets/images/upperimage6.jpeg';
import upperimage7 from '../../../assets/images/upperimage7.jpeg';
import upperimage8 from '../../../assets/images/upperimage8.jpeg';
import upperimage9 from '../../../assets/images/upperimage9.jpeg';
import upperimage10 from '../../../assets/images/upperimage10.jpeg';
import { Link } from 'react-router-dom';


export const upperImage = [
    {
        id: 101,
        image: upperimage1,
        innerImage1: innerimage1,
        innerImage1a: innerimage1a,
        innerImage1b: innerimage1b,
        innerImage1c: innerimage1c,
        innerImage1d: innerimage1d,
        name: "👗 GOWN COLLECTIONS👜",
        price: "RS.1550",
        deleteprice: "RS.1999",
        description: "💖 Desirable Women's gown Made With Faux Georgette Catonic Shade Fabrics and Designer Parallel sequins Dupatta 💃🏻",
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["Rani-Pink", "Parrot", "Purple"],
        material: "Cotton  (Full Inner Top To Bottom)",
        stockStatus: "In Stock",
        ratings: 4.5,

    },
    {
        id: 102,
        image: upperimage2,
        name: "Gown Made with Faux",
        price: "RS.1550",
        deleteprice: "RS.1999",
        description: "Stylish faux gown with intricate detailing.",
        sizes: ["M", "L"],
        colors: ["Green", "Blue"],
        material: "Faux Silk",
        stockStatus: "In Stock",
        ratings: 4.2,
        discount: "20% off"
    },
    {
        id: 103,
        image: upperimage3,
        name: "Gown Made with Faux",
        price: "RS.1550",
        deleteprice: "RS.1999",
        description: "Chic faux gown with a modern cut.",
        sizes: ["S", "M", "L"],
        colors: ["Purple", "Black"],
        material: "Faux Silk",
        stockStatus: "In Stock",
        ratings: 4.7,
        discount: "20% off"
    },
    {
        id: 104,
        image: upperimage4,
        name: "Pakistani Style Lights",
        price: "RS.1720",
        deleteprice: "RS.2199",
        description: "Traditional Pakistani outfit with intricate light embroidery.",
        sizes: ["M", "L", "XL"],
        colors: ["Gold", "Silver"],
        material: "Chiffon",
        stockStatus: "Out of Stock",
        ratings: 4.8,
        discount: "22% off"
    },
    {
        id: 105,
        image: upperimage5,
        name: "Navratri Collections",
        price: "RS.1400",
        deleteprice: "RS.1999",
        description: "Special collection for Navratri with vibrant colors.",
        sizes: ["S", "M", "L"],
        colors: ["Pink", "Yellow"],
        material: "Cotton",
        stockStatus: "In Stock",
        ratings: 4.3,
        discount: "30% off"
    },
    {
        id: 106,
        image: upperimage6,
        name: "Navratri Collections",
        price: "RS.1400",
        deleteprice: "RS.1999",
        description: "Festive outfit for Navratri with elegant design.",
        sizes: ["S", "M"],
        colors: ["Orange", "Blue"],
        material: "Cotton",
        stockStatus: "In Stock",
        ratings: 4.4,
        discount: "30% off"
    },
    {
        id: 107,
        image: upperimage7,
        name: "Navratri Collections",
        price: "RS.1400",
        deleteprice: "RS.1999",
        description: "Charming Navratri outfit with bright colors.",
        sizes: ["M", "L"],
        colors: ["Red", "Green"],
        material: "Cotton",
        stockStatus: "In Stock",
        ratings: 4.6,
        discount: "30% off"
    },
    {
        id: 108,
        image: upperimage8,
        name: "Mehera Green Cut Suit Set",
        price: "RS.1360",
        deleteprice: "RS.1949",
        description: "Floral Alia cut suit set in elegant green.",
        sizes: ["S", "M", "L"],
        colors: ["Green"],
        material: "Georgette",
        stockStatus: "In Stock",
        ratings: 4.7,
        discount: "30% off"
    },
    {
        id: 109,
        image: upperimage9,
        name: "Premium Readymade Gown",
        price: "RS.1400",
        deleteprice: "RS.1999",
        description: "Luxurious ready-made gown for special occasions.",
        sizes: ["M", "L", "XL"],
        colors: ["Black", "Red"],
        material: "Satin",
        stockStatus: "In Stock",
        ratings: 4.8,
        discount: "30% off"
    },
    {
        id: 110,
        image: upperimage10,
        name: "Premium Readymade Gown",
        price: "RS.1400",
        deleteprice: "RS.1999",
        description: "Elegant premium gown with sophisticated design.",
        sizes: ["L", "XL"],
        colors: ["Navy", "Maroon"],
        material: "Satin",
        stockStatus: "In Stock",
        ratings: 4.5,
        discount: "30% off"
    },
];


export default function Section1() {

    const handleOnclick = (e) => {
        const match = upperImage.find(m => m.id === e)

        if (match) {
            //set obj in local stotrage
            localStorage.setItem('selectedItem', JSON.stringify(match))
            console.log('item added to local storage', match);
        }
    }

    return (
        <div className='section'>

            {upperImage.map((upperimage, index) => (
                <Link
                    to="/cartdetails"
                    key={index}
                    onClick={() => handleOnclick(upperimage.id)}
                    className="upperimage"
                >
                    <div className="upper-img">
                        <img src={upperimage.image} alt={upperimage.name} />
                    </div>
                    <div className="details">
                        <h4>{upperimage.name}</h4>
                        <p><del>{upperimage.deleteprice}</del> {upperimage.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

import React from 'react';
import Slider from "react-slick";
import './CardDetails.scss';


export default function CardDetails() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const upperimage = JSON.parse(localStorage.getItem("selectedItem"));

    return (
        <>        <div className='card-details'>
            <div className="upperimage">
                <div className="upper-img">
                    <img src={upperimage.image} alt={upperimage.name} />
                </div>
                <div className="details">
                    <h4>{upperimage.name}</h4>

                    <p className="description">{upperimage.description}</p>
                    <p className="material">Material: {upperimage.material}</p>
                    <p className="sizes">Sizes: {upperimage.sizes.join(', ')}</p>
                    <p className="colors">Colors: {upperimage.colors.join(', ')}</p>
                    <p className="stock-status">Status: {upperimage.stockStatus}</p>
                    <p className="ratings">Rating: {upperimage.ratings} ★</p>
                    <p className="price">
                        <del>{upperimage.deleteprice}</del> {upperimage.price}
                    </p>
                    {/* <p className="discount">Discount: {upperimage.discount}</p> */}
                </div>
            </div>
            <div className="innerimage">
                <img src={upperimage.innerImage1} />
                <img src={upperimage.innerImage1a} />
                <img src={upperimage.innerImage1b} />
                <img src={upperimage.innerImage1c} />
                <img src={upperimage.innerImage1d} />
            </div>
        </div>
        </>

    );
}

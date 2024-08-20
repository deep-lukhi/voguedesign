import React from 'react'
import './header.scss'
import logo from '../../assets/logo/logo.webp'
import { CgProfile } from "react-icons/cg";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="header1">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="menu">
                        <a href="">WOMEN</a>
                        <a href="">KIDS</a>
                        <a href="">HOME&LIVING</a>
                        <a href="">ABOUT</a>
                    </div>
                    <div className="cart">
                        <a href=""> <CgProfile /></a>
                        <a href=""><FcLike /></a>
                        <a href="">  <FaShoppingCart /></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

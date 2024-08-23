import React from 'react'
import Header from '../../common/header'
import Footer from '../../common/footer'
import { Outlet } from 'react-router-dom'

export default function Defaultlayout() {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

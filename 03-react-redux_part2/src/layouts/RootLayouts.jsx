import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RootLayouts = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default RootLayouts
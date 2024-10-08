import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex space-x-4 p-4 bg-gray-800 text-white">
            <Link to="/">Home</Link>
            <Link to="/todo">About</Link>
        </nav>
    )
}

export default Navbar
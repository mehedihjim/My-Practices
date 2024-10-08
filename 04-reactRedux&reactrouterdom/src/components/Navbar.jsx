import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='sticky top-0 left-0'>
            <ul className='w-full bg-black text-white flex justify-center gap-2 py-4'>
                <li><NavLink to='' >Home</NavLink></li>
                <li><NavLink to='about' >About</NavLink></li>
                <li><NavLink to='redux' >Redux</NavLink></li>
                <li><NavLink to='github' >Github</NavLink></li>
                <li><NavLink to='contact' >Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar
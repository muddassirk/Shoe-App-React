import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
export default function NavBar() {
    return (
        <div className='navBar'>
            <Link className='navBarItems' to='/'>Home</Link>
            <Link className='navBarItems' to='/about'>About</Link>
            <Link className='navBarItems' to='/product'>Products</Link>
        </div>
    )
}

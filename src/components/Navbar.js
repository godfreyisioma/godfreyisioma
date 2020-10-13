import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    



  

    return (
        <React.Fragment>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        GODFREY
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes className='fa-times' /> : <FaBars className='fa-bars' /> } 
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                               About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/work' className='nav-links' onClick={closeMobileMenu}>
                                Work
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/insight' className='nav-links' onClick={closeMobileMenu}>
                                Insight
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar

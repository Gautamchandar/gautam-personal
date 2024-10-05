import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
        <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><Link to="/">Hᴏᴍᴇ</Link></li>
                <li><Link to="about">Aʙᴏᴜᴛ</Link></li>
                <li><Link to="/skills">Sᴋɪʟʟs</Link></li>
                <li><Link to="/projects">Pʀᴏᴊᴇᴄᴛs</Link></li>
                <li><Link to="/certificates">Cᴇʀᴛɪғɪᴄᴀᴛᴇs</Link></li>
                <li><Link to="/contactUs">Cᴏɴᴛᴀᴄᴛ Us</Link></li>
            </ul>
        </div>
    </nav>
    </>
  )
}

export default Navbar

import React from 'react'
import '../css/header.css'
import logo from '../images/logo.svg'
import side_logo from '../images/logoFtr.svg'
import drop_img from '../images/bitcoin.png'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
          <nav>
              <div className='wrapper'>
                <div className="logo">
                    <a href=""><img src={logo} height='40'/></a>
                </div>
                <input type="radio" name="slider" id="menu-btn" />
                <input type="radio" name="slider" id="close-btn" />

                <ul className="nav-links">
                   <label htmlFor="close-btn" className="btn close-btn"><i className="fa fa-times"></i></label>
                   <a href=""><img src={side_logo} className="side_logo" /></a>
                   <li className='menu-links'><a href="/">Home</a></li>
                    <li className='menu-links'>
                        <a href="" className="desktop-item">PLATFORMS<i className="fa fa-caret-down"></i></a>
                        <input type="checkbox" id="showDrop" />
                        <label for="showDrop" className="mobile-item">PLATFORMS<i className="fa fa-caret-down"></i></label>
                        <ul className="drop-menu">
                            <li><Link to="/Dashboard"><a href="">VALIDEFI•DX</a></Link></li>
                            <li><Link to="/Validefinf"><a href="">VALIDEFI•NF T-Link (Coming Soon)</a></Link></li>
                            <li><Link to="/Validefipsp" ><a href="">Validefi PSP</a></Link></li>
                            <li><Link to="/Valideficoming"><a href="">Validefi (Coming Soon)</a></Link></li>
                        </ul>
                    </li>
                    <li className='menu-links'><Link to="/About"><a>About</a></Link></li>
                    <li className='menu-links'><Link to="/Faq"><a>Faq</a></Link></li>
                    <li className='menu-links'><Link to="/Contact"><a>Contact</a></Link></li>
                    <li className='menu-links display_none'>
                        <a href="" className="desktop-item abbreviations_bit"><img src={drop_img} className='drop_img' /> BTC<i className="fa fa-caret-down"></i></a>
                        <ul className="drop-menu display_none">
                            <li><Link to="/ETH"><a><img src={drop_img}/>ETH</a></Link></li>
                            <li><Link to="/USDT"><a><img src={drop_img}/>USDT</a></Link></li>
                            <li><Link to="/BNB"><a><img src={drop_img}/>BNB</a></Link></li>
                            <li><Link to="/Tron"><a><img src={drop_img}/>TRON</a></Link></li>
                        </ul>
                    </li>
                    <li className='menu-links login display_none'><Link to="/Login">SIGNIN</Link></li>
                    <li className='menu-links login display_none'><Link to="/Signup">SIGNUP</Link></li>  
                    
                    
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fa fa-bars"></i></label>
              </div>
          </nav>
        </>
    )
}

export default Header
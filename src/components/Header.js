import React from 'react'
import '../css/header.css'
import 'font-awesome/css/font-awesome.min.css'
import logo from '../images/logo.svg'
import side_logo from '../images/logoFtr.svg'
import drop_img from '../images/bitcoin.png'

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
                            <li><a href="">VALIDEFI•DX</a></li>
                            <li><a href="">VALIDEFI•NF T-Link (Coming Soon)</a></li>
                            <li><a href="">Validefi PSP</a></li>
                            <li><a href="">Validefi (Coming Soon)</a></li>
                        </ul>
                    </li>
                    <li className='menu-links'><a href="/">About us</a></li>
                    <li className='menu-links'><a href="/">FAQ</a></li>
                    <li className='menu-links'><a href="/">Contact</a></li>
                    <li className='menu-links display_none'>
                        <a href="" className="desktop-item abbreviations_bit"><img src={drop_img} className='drop_img' /> BTC<i className="fa fa-caret-down"></i></a>
                        <ul className="drop-menu display_none">
                            <li><a href="/"><img src={drop_img}/> ETC</a></li>
                            <li><a href="/"><img src={drop_img}/> BNB</a></li>
                            <li><a href="/"><img src={drop_img}/> USDT</a></li>
                            <li><a href="/"><img src={drop_img}/> TRON</a></li>
                        </ul>
                    </li>
                    <li className='menu-links login display_none'><a href="">Login</a></li>
                    <li className='menu-links login display_none'><a href="">SIGNUP</a></li>  
                    
                    
                </ul>
                <label htmlFor="menu-btn" className="btn menu-btn"><i className="fa fa-bars"></i></label>
              </div>
          </nav>
        </>
    )
}

export default Header
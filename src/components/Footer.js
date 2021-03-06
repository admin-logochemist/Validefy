import React from 'react'
import '../css/footer.css'
import footer_logo from '../images/logoFtr.svg'
import img_one from '../images/BBB-icon.png'
import img_two from '../images/PCI-icon.png'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
function Footer() {
  return (
      <>
        <section>
            <div className='container-fluid custom_conatiner'>
              <div className='row'>
                <div className='col-lg-2 col_footer'>
                  <div className='footer'>
                    <h4>TOOLS</h4>
                    <li><Link to='/Signup'><a>VALIDEFI•DX</a></Link></li>
                    <li><Link to='/Signup'><a>Portfolio Tracker</a></Link></li>
                    <li><Link to='/Signup'><a>VALIDEFI•NT T-Link</a></Link></li>
                    <li><Link to='/Signup'> <a>Titan Wallet</a></Link> </li>
                  </div>
                </div>

                <div className='col-lg-2 col_footer'>
                  <div className='footer'>
                    <h4>TOKEN</h4>
                      <li><Link to='/Signup'><a>Valid Token</a></Link></li>
                      <li><Link to='/Signup'><a>PSP (Profit Share Protocol)</a></Link></li>
                      <li><Link to='/Signup'> <a>White Paper</a></Link> </li>
                  </div>
                </div>

                <div className='col-lg-2 col_footer'>
                  <div className='footer'>
                    <h4>ABOUT</h4>
                    <li><Link to='/Signup'> <a>Team</a></Link> </li>
                    <li><Link to='/Signup'><a>Investor Relations</a></Link></li>
                    <li><Link to='/Signup'><a>Institutional</a></Link></li>
                    <li><Link to='/Signup'><a>Careers</a></Link></li>
                    <li><Link to='/Signup'><a>NFT Platform</a></Link></li>
                  </div>
                </div>

                <div className='col-lg-2 col_footer'>
                  <div className='footer'>
                    <h4>LEGAL</h4>
                    <li><Link to='/Signup'><a>Term of use</a></Link></li>
                    <li><Link to='/Signup'><a>Customer Agreement</a></Link></li>
                    <li><Link to='/Signup'><a>Licenses</a></Link></li>
                    <li><Link to='/Signup'><a>Privacy Policy</a></Link></li>
                    <li><Link to='/Signup'><a>Promotions</a></Link></li>
                  </div>
                </div>


                <div className='col-lg-4 col_footer_last'>
                  <div className='footer'>
                    <img src={footer_logo}/>
                    <p>We're committed to creating financial freedom by making valid and secure tools accessible to everyone.</p>
                    <ul>
                      <li><a><i class="fa fa-facebook-f"></i></a></li>
                      <li><a><i class="fa fa-twitter"></i></a></li>
                      <li><a><i class="fa fa-instagram"></i></a></li>
                      <li><a><i class="fa fa-linkedin"></i></a></li>
                      <li><a><i class="fa fa-medium"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='border_top'>
                <h5 className='copy_right'>© 2022 Validefi</h5>
                  <div className='copy_right_img'>
                    <img src={img_two}/>
                    <img src={img_one}/>
                  </div>
                </div>
              </div>
            </div>
       </section>
      </>
  )
}

export default Footer
import React from 'react'
import '../css/footer.css'
import footer_logo from '../images/logoFtr.svg'
import img_one from '../images/BBB-icon.png'
import img_two from '../images/PCI-icon.png'

function Footer() {
  return (
      <>
        <section>
            <div className='container-fluid custom_conatiner'>
              <div className='row'>
                <div className='col-lg-2 col_footer'>
                  <div className='footer'>
                    <h4>Tools</h4>
                    <li><a>VALIDEFI•DX</a></li>
                    <li><a>Portfolio Tracker</a></li>
                    <li><a>VALIDEFI•NT T-Link</a></li>
                    <li><a>Titan Wallet</a></li>
                  </div>
                </div>

                <div className='col-lg-2 col_footer'>
                  <div className='footer'>
                    <h4>Token</h4>
                      <li><a>Valid Token</a></li>
                      <li><a>PSP (Profit Share Protocol)</a></li>
                      <li><a>White Paper</a></li>
                  </div>
                </div>

                <div className='col-lg-2 col_footer'>
                  <div className='footer'>
                    <h4>ABOUT</h4>
                    <li><a>Team</a></li>
                    <li><a>Investor Relations</a></li>
                    <li><a>Institutional</a></li>
                    <li><a>Careers</a></li>
                    <li><a>NFT Platform</a></li>
                  </div>
                </div>

                <div className='col-lg-2 col_footer'>
                  <div className='footer'>
                    <h4>LEGAL</h4>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Term of use</a></li>
                    <li><a>Customer Agreement</a></li>
                    <li><a>Licenses</a></li>
                    <li><a>Promotions</a></li>
                  </div>
                </div>


                <div className='col-lg-4 col_footer_last'>
                  <div className='footer'>
                    <img src={footer_logo}/>
                    <p>We're committed to creating financial freedom by making valid and secure tools accessible to everyone.</p>
                    <ul>
                      <li><a href='https://business.facebook.com/Validefi-Network-106728818516821/' target="_blank"><i class="fa fa-facebook-f"></i></a></li>
                      <li><a href='https://twitter.com/ValidefiNetwork' target="_blank"><i class="fa fa-twitter"></i></a></li>
                      <li><a href='https://instagram.com/validefinetwork' target="_blank"><i class="fa fa-instagram"></i></a></li>
                      <li><a  href='https://linkedin.com/' target="_blank"><i class="fa fa-linkedin"></i></a></li>
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
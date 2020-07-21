import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div >
      <footer className="main-footer">
        <div className="container">
          <div className="row">
          <div class="col-md-4">
            <div class="logo">
              <h6 class="text-white">Ingenuity</h6>
            </div>
            <div class="contact-details">
              <p>Near Bopdev Ghat, Kondhwa Annexe, Yewalewadi, Pune, Maharashtra 411048</p>
              <p>Phone: </p>
              <p>Email: <a href="mailto:ingenuity@iiitp.ac.in">ingenuity@iiitp.ac.in</a></p>
              <ul class="social-menu">
                <li class="list-inline-item"><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#"><i class="fa fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4 justify-content-center align-self-center">
              <img src={require('../assets/images/logo2.png')}
              width='300'></img>
          </div>
          <div class="col-md-4">
          </div>
          </div>
        </div>
        <div class="copyrights">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; 2020 Ingenuity Student Media Body , IIIT Pune</p>
            </div>
          </div>
        </div>
      </div>
      </footer>
      {/* <div className='container footer-font'>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-4 '>
            <div style={{fontFamily:'San serif'}}>CONTACT US : <br/>
            Email: <a href='mailto:ingenuity@iiitp.ac.in'>ingenuity@iiitp.ac.in</a></div>
            <div className="ml-0"><Link  to='/ourteam' >About us</Link></div>
            <h3>Links</h3>
            <ul className='list-unstyled'>
              <li className="mb-1" >
                <Link className='footer-link-name ' to='/home'>
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link className='footer-link-name' to='/aboutus'>
                  About Us
                </Link>,
              </li>
              <li className="mb-1">
                <Link className='footer-link-name' to='/menu'>
                  Menu
                </Link>
              </li>
              <li >
                <Link className='footer-link-name' to='/contactus'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-12 col-sm-4 justify-content-center align-self-center'>
            <a href='/home'>
              <img
                src={require('../assets/images/logo2.png')}
                width='300'
              ></img>
            </a>

          </div>
          <div className='col-12 col-sm-4 align-self-center'>
            <div className='text-center'>
              <a
                className='btn btn-social-icon zoom '
                href='http://www.facebook.com/profile.php?id='
              >
                <i
                  className='fa fa-facebook-square'
                  style={{ color: 'white' }}
                  aria-hidden='true'
                ></i>
              </a>
              <a
                className='btn btn-social-icon zoom'
                href='http://www.linkedin.com/in/'
              >
                <i
                  className='fa fa-linkedin'
                  style={{ color: 'white' }}
                  aria-hidden='true'
                ></i>
              </a>
              <a
                className='btn btn-social-icon zoom '
                href='http://twitter.com/'
              >
                <i
                  className='fa fa-twitter'
                  style={{ color: 'white' }}
                  aria-hidden='true'
                ></i>
              </a>
              <a
                className='btn btn-social-icon btn-google'
                href='http://youtube.com/'
              >
                <i className='fa fa-youtube'></i>
              </a>
            </div>
          </div>
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col-auto'>
            <p> Copyright © 2020 Ingenuity Student Media Body , IIIT Pune </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;

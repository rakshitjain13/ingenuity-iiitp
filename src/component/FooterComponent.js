import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div
      className='footer mt-5'
    >
      <div className='container footer-font'>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-4 '>
            <h6>CONTACT US</h6>
            Email
            <br/>
            <a href="mailto:ingenuity@iiitp.ac.in">ingenuity@iiitp.ac.in</a>
            <br/>
            <Link to='/ourteam'>About us</Link>

            {/* <h3>Links</h3>
            <ul className='list-unstyled'>
              <li className="mb-1" >
                <Link className='footer-link-name ' to='/home'>
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link className='footer-link-name' to='/aboutus'>
                  About Us
                </Link>
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
            </ul>*/}
          </div> 

          <div className='col-12 col-sm-4 justify-content-center align-self-center'>
            <a href="/home">
            <img
              
              src={require('../assets/images/logo2.png')}
              width='300'
            ></img></a>
            {/* <div className='ml-5 name-container'>
              <div class='name'>Watch Out!</div> 
              <div className='desc' >
                <br />
                <span className='logo-text'>Student Media</span>
                <br /> Body of IIIT Pune
              </div>
            </div> */}
          </div>

          {/* <div className='col-7 col-sm-5'></div> */}
          <div className='col-12 col-sm-4 align-self-center'>
            <div className='text-center'>
              {/* <a
                className='btn btn-social-icon btn-google'
                href='http://google.com/+'
              >
                <i className='fa fa-google-plus'></i>
              </a> */}
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
              {/* <a
                className='btn btn-social-icon btn-google'
                href='http://youtube.com/'
              >
                <i className='fa fa-youtube'></i>
              </a> */}
            </div>
          </div>
        </div>
        <div className='row justify-content-center mt-5'>
          <div className='col-auto'>
            <p> Copyright © 2020 Ingenuity, IIIT Pune </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

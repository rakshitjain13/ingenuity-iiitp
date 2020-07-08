import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div
      className='footer'
      style={{
        backgroundImage: 'url(' + require('../assets/images/clouds.png') + ')',
        color: 'white',
        marginTop: '100px',
      }}
    >
      <div className='container footer-font'>
        <div className='row justify-content-center'>
          <div className='col-4 offset-1 col-sm-2 mt-5'>
            <h3>Links</h3>
            <ul className='list-unstyled'>
              <li className='Link-class'>
                <Link className='footer-link-name' to='/home'>
                  Home
                </Link>
              </li>
              <li className='Link-class'>
                <Link className='footer-link-name' to='/aboutus'>
                  About Us
                </Link>
              </li>
              <li className='Link-class'>
                <Link className='footer-link-name' to='/menu'>
                  Menu
                </Link>
              </li>
              <li className='Link-class'>
                <Link className='footer-link-name' to='/contactus'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className='col-4 offset-1 col-sm-2 mt-5 '>
            <img
              className='logo-footer'
              src='data:image/png;base64,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'
            ></img>
            <div className='name-container'>
              {/* <div class='name'>Watch Out!</div> */}
              <div className='desc' style={{ marginLeft: '3px' }}>
                <br />
                <span className='logo-text'>Student Media</span>
                <br /> Body of IIIT Pune
              </div>
            </div>
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
            <p> Copyright © 2020 'Name of body', IIIT Pune </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

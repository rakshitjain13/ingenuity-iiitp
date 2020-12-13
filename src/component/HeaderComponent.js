import React, {useState} from 'react';
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from 'reactstrap';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { NavLink ,Link} from 'react-router-dom';

const Header =()=>{
  const [isNavOpen,toggleNav]=useState(false)
    return (
      <div>
        <Navbar style={{ backgroundColor: '#0e0e0e' }} expand='md'>
          <div className='container '>
            <NavbarToggler onClick={()=>toggleNav(!isNavOpen)}>
              <MenuRoundedIcon style={{ color: "white" }}/>
            </NavbarToggler>
              <Link to='/'>
              <img
                style={{ "object-fit": "cover"}}
                src={require('../assets/images/logo2.png')}
                height='45'
                alt='Ingenuity'
              />
              </Link>

            <Collapse isOpen={isNavOpen} navbar>
              <Nav className='ml-auto' style={{ fontSize: '17px' }} navbar>
                <NavItem>
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/editorials'
                    style={{ fontFamily: 'Ubuntu,sans-serif' }}
                  >
                    Editorials
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/achievements'
                    style={{ fontFamily: 'Ubuntu,sans-serif' }}
                  >
                    Achievements
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/experience'
                    style={{ fontFamily: 'Ubuntu,sans-serif' }}
                  >
                    Intern Views
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/postBlog'
                    style={{ fontFamily: 'Ubuntu,sans-serif' }}
                  >
                    Create
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/ourteam'
                    style={{ fontFamily: 'Ubuntu,sans-serif' }}
                  >
                    About Us
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
}
export default React.memo(Header);

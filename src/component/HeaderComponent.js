import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from 'reactstrap';
import { NavLink ,Link} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: '#0e0e0e' }} expand='md'>
          <div className='container '>
            <NavbarToggler onClick={this.toggleNav}>
              <span className='fa fa-bars' style={{ color: 'white' }}></span>
            </NavbarToggler>
              <Link to='/'>
              <img
                src={require('../assets/images/logo2.png')}
                height='45'
                alt='Ingenuity'
              />
              </Link>

            <Collapse isOpen={this.state.isNavOpen} navbar>
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
}
export default Header;

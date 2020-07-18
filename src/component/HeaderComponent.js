import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

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
      <div
        className='header-bg'
        // style={{
        //   backgroundImage:
        //     'url(' + require('../assets/images/clouds.png') + ')',
        // }}
      >
        <Navbar expand='md'>
          <div className='container nav-font '>
            <NavbarToggler onClick={this.toggleNav}>
              <span className='fa fa-bars' style={{ color: 'white' }}></span>
            </NavbarToggler>
            <NavbarBrand href='\'>
              <img
                src={require('../assets/images/logo2.png')}
                height='70'
                alt='Ingenuity'
                className='hvr-push'
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className='ml-auto' navbar>
                <NavItem>
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/editorials'
                  >
                    Editorials
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/achievments'
                  >
                    Achievments
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/experience'
                  >
                    Intern Views
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='nav-link nav-font hvr-push' to='/ourteam'>
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

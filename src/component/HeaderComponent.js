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
      //   <div>
      //   <header className="header">
      //   <nav className="navbar navbar-expand-lg">
      //     <div className="search-area">
      //       <div className="search-area-inner d-flex align-items-center justify-content-center">
      //         <div className="close-btn"><i className="icon-close"></i></div>
      //         <div className="row d-flex justify-content-center">
      //           <div className="col-md-8">
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //     <div className="container">
      //       <div className="navbar-header d-flex align-items-center justify-content-between">
      //        <a href="index.html" className="navbar-brand">Bootstrap Blog</a>
      //         <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span></span><span></span><span></span></button>
      //       </div>
      //       <div id="navbarcollapse" className="collapse navbar-collapse">
      //         <ul className="navbar-nav ml-auto">
      //           <li className="nav-item"><a href="index.html" className="nav-link active ">Home</a>
      //           </li>
      //           <li className="nav-item"><a href="blog.html" className="nav-link ">Blog</a>
      //           </li>
      //           <li className="nav-item"><a href="post.html" className="nav-link ">Post</a>
      //           </li>
      //           <li className="nav-item"><a href="#" className="nav-link ">Contact</a>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      // </header>
      // </div>
      <div>
        <Navbar style={{ backgroundColor: '#0e0e0e' }} expand='md'>
          <div className='container '>
            <NavbarToggler onClick={this.toggleNav}>
              <span className='fa fa-bars' style={{ color: 'white' }}></span>
            </NavbarToggler>
            <NavbarBrand href='\'>
              <img
                src={require('../assets/images/logo2.png')}
                height='45'
                alt='Ingenuity'
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className='ml-auto' style={{ fontSize: '17px' }} navbar>
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
                    to='/achievements'
                  >
                    Achievements
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
                  <NavLink
                    className='nav-link nav-font hvr-push'
                    to='/postBlog'
                  >
                    Create
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

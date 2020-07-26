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
    //   <header class="header">
    //   <nav class="navbar navbar-expand-lg">
    //     <div class="search-area">
    //       <div class="search-area-inner d-flex align-items-center justify-content-center">
    //         <div class="close-btn"><i class="icon-close"></i></div>
    //         <div class="row d-flex justify-content-center">
    //           <div class="col-md-8">
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="container">
    //       <div class="navbar-header d-flex align-items-center justify-content-between">
    //        <a href="index.html" class="navbar-brand">Bootstrap Blog</a>
    //         <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span></span><span></span><span></span></button>
    //       </div>
    //       <div id="navbarcollapse" class="collapse navbar-collapse">
    //         <ul class="navbar-nav ml-auto">
    //           <li class="nav-item"><a href="index.html" class="nav-link active ">Home</a>
    //           </li>
    //           <li class="nav-item"><a href="blog.html" class="nav-link ">Blog</a>
    //           </li>
    //           <li class="nav-item"><a href="post.html" class="nav-link ">Post</a>
    //           </li>
    //           <li class="nav-item"><a href="#" class="nav-link ">Contact</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    // </div>
      <div >
        <Navbar style={{backgroundColor: '#0e0e0e'}} expand='md' >
          <div className='container '>
            <NavbarToggler onClick={this.toggleNav}>
              <span className='fa fa-bars' style={{color:'white'}}></span>
            </NavbarToggler>
            <NavbarBrand href='\'>
              <img
                src={require('../assets/images/logo2.png')}
                height='45'
               
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

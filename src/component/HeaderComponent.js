import React,{Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      
    render(){
        return(
            <div>
                <div className="header-bg"  style={{
               backgroundImage: "url(" + require("../assets/images/clouds.png") + ")"}}>
                <div className="container">
                    <div className="row row-header">
                        <div className="col ml-0" style={{margin:10,color:'white'}}>LOGO</div>
                        <div className="col-auto justify-content-right" style={{margin:10}}>
                        <a href="#" className="btn btn-social-icon" title="like our page"><i className="fa fa-facebook-square" style={{color:'white'}} aria-hidden="true"></i></a>
                        <a href="#" className="btn btn-social-icon" title="follow our page"><i className="fa fa-twitter" style={{color:'white'}} aria-hidden="true"></i></a>
                        <a href="#" className="btn btn-social-icon" title="follow us on our page"><i className="fa fa-instagram" style={{color:'white'}} aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <Navbar  expand="md">
                    <div className="container nav-font ">
                        <NavbarToggler onClick={this.toggleNav}><span className="fa fa-bars" style={{color:'white'}} ></span></NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <NavItem >
                                <NavLink className="nav-link nav-font"  to='/home'>Blogs</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-font"  to='/home'>Editorials</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-font"  to='/home'>Success Stories</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link nav-font"  to='/home'>Our Team</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                </div>
            </div>
        );
    }
}
export default Header;
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

import { baseUrl } from '../shared/baseUrl';
function ValidationMessage(props) {
  if (!props.valid) {
    return <div className='error-msg'>{props.message}</div>;
  }
  return null;
}

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      formValid: false,
      validname: false,
      validmessage: false,
      errmessage: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateForm = () => {
    const { validname, validmessage } = this.state;
    this.setState({
      formValid: validmessage && validname,
    });
  };
  updatename = (name) => {
    this.setState({ name }, this.validatename);
  };
  updatemessage = (message) => {
    this.setState({ message }, this.validatemessage);
  };
  validatename = () => {
    const { name } = this.state;
    let validname = true;
    let errmessage = { ...this.state.errmessage };

    if (name.length < 3) {
      validname = false;
      errmessage.name = 'Must be at least 3 characters long';
    }

    this.setState({ validname, errmessage }, this.validateForm);
  };
  validatemessage = () => {
    const { message } = this.state;
    let validmessage = true;
    let errmessage = { ...this.state.errmessage };

    if (message.length < 3) {
      validmessage = false;
      errmessage.message = 'Must be at least 3 characters long';
    }

    this.setState({ validmessage, errmessage }, this.validateForm);
  };
  // handleInputChange(event) {
  //   const target = event.target;
  //   const value =  target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  //   }
  // handleBlur = (field)=>(event) => {
  //     this.setState({
  //         touched: { ...this.state.touched, [field]: true}
  //     });
  // }

  handleSubmit(event) {
    console.log('Current State is: ' + JSON.stringify(this.state));
    alert('Thank you for your valuable time .Your feeback has received ');
    axios
      .post(baseUrl + 'feedback', {
        name: this.state.name,
        message: this.state.message,
      })
      .then((res) => {
        console.log(res.data);
      });
    // alert('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <footer className='main-footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='logo'>
                  <h6 className='text-white'>Ingenuity</h6>
                </div>
                <div className='contact-details'>
                  <p>
                    Near Bopdev Ghat, Kondhwa Annexe, Yewalewadi, Pune,
                    Maharashtra 411048
                  </p>
                  <p>Phone: </p>
                  <p>
                    Email:{' '}
                    <a href='mailto:ingenuity@iiitp.ac.in'>
                      ingenuity@iiitp.ac.in
                    </a>
                  </p>
                  <ul className='social-menu'>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#'>
                        <i className='fa fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-md-4 justify-content-center mt-5 '>
                <a href={'/home'}>
                  <img
                    src={require('../assets/images/logo2.png')}
                    width='300'
                    alt='img'
                  ></img>
                </a>
              </div>
              <div className='col-md-4'>
                <h6>Share your thoughts or Report problems</h6>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Label htmlFor='name' md={3}>
                      Name*
                    </Label>
                    <Col md={9}>
                      <Input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={(e) => this.updatename(e.target.value)}
                      />
                      <ValidationMessage
                        valid={this.state.validname}
                        message={this.state.errmessage.name}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor='message' md={3}>
                      Message*
                    </Label>
                    <Col md={9}>
                      <Input
                        type='textarea'
                        id='message'
                        name='message'
                        rows='5'
                        placeholder='Your message'
                        value={this.state.message}
                        onChange={(e) => this.updatemessage(e.target.value)}
                      ></Input>
                      <ValidationMessage
                        valid={this.state.validmessage}
                        message={this.state.errmessage.message}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{ size: 10, offset: 3 }}>
                      <Button
                        type='submit'
                        color='primary'
                        disabled={!this.state.formValid}
                      >
                        Feedback
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
          <div className='copyrights'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6'>
                  <p>&copy; 2020 Ingenuity Student Media Body , IIIT Pune</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

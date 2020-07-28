import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function ValidationMessage(props) {
  if (!props.valid) {
    return <div className='error-msg'>{props.message}</div>;
  }
  return null;
}
class Postblog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      link: '',
      editorState: EditorState.createEmpty(),
      nameValid: false,
      emailValid: false,
      contentValid: false,
      formValid: false,
      errorMsg: {},
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateContent = this.validateContent.bind(this);
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState,
    });
    this.validateContent();
  }
  validateContent() {
    const { editorState } = this.state;
    let contentValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (
      draftToHtml(convertToRaw(editorState.getCurrentContent())).length < 12
    ) {
      contentValid = false;
      errorMsg.content = 'Must be at least 4 characters long';
    }
    this.setState({ contentValid, errorMsg }, this.validateForm);
  }
  validateForm = () => {
    const { nameValid, emailValid, contentValid } = this.state;
    this.setState({
      formValid: nameValid && emailValid && contentValid,
    });
  };
  validatename = () => {
    const { name } = this.state;
    let nameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (name.length < 3) {
      nameValid = false;
      errorMsg.name = 'Must be at least 3 characters long';
    }

    this.setState({ nameValid, errorMsg }, this.validateForm);
  };
  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // checks for format _@_._
    if (
      !/^[^\s@]+@[^\s@]+iiitp.ac.in$/.test(email) &&
      !/^[^\s@]+@iiitp.ac.in$/.test(email)
    ) {
      emailValid = false;
      errorMsg.email = 'Invalid email format and use your iiitp domain email ';
    }

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  handleSubmit(event) {
    event.preventDefault();
    alert(
      'Thank you for your entry! \n We will verfiy your blog as soon as possible'
    );
    // alert(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())).length);
    axios.post(baseUrl + 'Blog', {
      name: this.state.name,
      email: this.state.email,
      link: this.state.link,
      content: draftToHtml(
        convertToRaw(this.state.editorState.getCurrentContent())
      ),
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row mt-5'>
          <h1>Feature yourself,create your own Blog!</h1>
        </div>
        <div className='row'>
          <div className='col-12 col-md-10 mt-5'>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor='name' md={2}>
                  Name<span style={{ color: 'red' }}>*</span>
                </Label>
                <Col md={8}>
                  <Input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Name'
                    value={this.state.name}
                    onChange={(e) =>
                      this.setState({ name: e.target.value }, this.validatename)
                    }
                  />
                  <ValidationMessage
                    valid={this.state.nameValid}
                    message={this.state.errorMsg.name}
                  />
                  {/*< ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='email' md={2}>
                  Email<span style={{ color: 'red' }}>*</span>
                </Label>
                <Col md={8}>
                  <Input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Your iiitp email'
                    value={this.state.email}
                    onChange={(e) =>
                      this.setState(
                        { email: e.target.value },
                        this.validateEmail
                      )
                    }
                  />
                  <ValidationMessage
                    valid={this.state.emailValid}
                    message={this.state.errorMsg.email}
                  />
                  {/* onChange={(e) => this.updatename(e.target.value)}  
                                 < ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='link' md={2}>
                  Your Profile url<span style={{ color: 'red' }}></span>
                </Label>
                <Col md={8}>
                  <Input
                    type='url'
                    id='link'
                    name='link'
                    placeholder='Url for your Linkdin or Github or Facebook or etc.'
                    value={this.state.link}
                    onChange={(e) => this.setState({ link: e.target.value })}
                  />
                  {/* onChange={(e) => this.updatename(e.target.value)}  
                                 < ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='post' md={2}>
                  Post<span style={{ color: 'red' }}>*</span>
                </Label>
                <Col md={10}>
                  <Editor
                    placeholder='Start creating your post...'
                    wrapperclassName='check'
                    editorclassName=''
                    onContentStateChange={this.onContentStateChange}
                    onEditorStateChange={this.onEditorStateChange}
                  />
                  <ValidationMessage
                    valid={this.state.contentValid}
                    message={this.state.errorMsg.content}
                  />

                  {/* onChange={(e) => this.updatename(e.target.value)}  
                                 < ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col style={{ 'margin-left': '110px' }}>
                  <Button
                    type='submit'
                    color='primary'
                    disabled={!this.state.formValid}
                    className='ml-5'
                  >
                    Post
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Postblog;

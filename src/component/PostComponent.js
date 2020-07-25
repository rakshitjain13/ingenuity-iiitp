import React, { Component } from 'react';
import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const content = {
  entityMap: {},
  blocks: [
    {
      key: '637gr',
      text: 'Initialized from content state.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
};

class Postblog extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      name: '',
      email: '',
      link: '',
      contentState,
    };
    // this.check = this.check.bind(this);
    this.onContentStateChange = this.onContentStateChange.bind(this);
    // this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onContentStateChange(contentState) {
    this.setState({
      contentState,
    });
  }
  //   onEditorStateChange(editorState) {
  //     this.setState({
  //       some: editorState,
  //     });
  //   }

  //   check() {
  //     console.log(this.state.contentState);
  //   }

  //   updatepost(post) {
  //     console.log(post);
  //     this.setState({ post });
  //   }

  handleSubmit(event) {
    event.preventDefault();
    alert('Thank you for your entry!');
    axios.post(baseUrl + 'postBlog', {
      name: this.state.name,
      email: this.state.email,
      link: this.state.email,
      contentState: this.state.contentState.blocks[0].text,
    });
    // alert('Current State is: ' + JSON.stringify(this.state));
    console.log(this.state);
    console.log(this.state.contentState.blocks[0].text);
  }

  render() {
    const { contentState } = this.state;
    return (
      <div className='container'>
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
                    onChange={(e) => this.setState({ name: e.target.value })}
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
                    onChange={(e) => this.setState({ email: e.target.value })}
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
                <Col md={8} style={{ border: '1px solid' }}>
                  <Editor
                    wrapperClassName='demo-wrapper'
                    editorClassName='demo-editor'
                    onContentStateChange={this.onContentStateChange}
                  />

                  {/* <Input type="textarea" id="post" name="post" rows={6}
                                    placeholder="Start creating your post"
                                    value={this.state.post}/> */}
                  {/* onChange={(e) => this.updatename(e.target.value)}  
                                 < ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                </Col>
              </FormGroup>
              <Button type='submit'>Check</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Postblog;

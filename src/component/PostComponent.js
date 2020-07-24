import React ,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import {EditorState,convertFromRaw,convertToRaw} from "draft-js";
import {Editor} from "react-draft-wysiwyg"
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
class Postblog extends Component{
    constructor(props){
        super(props);
       
        this.state={
            initial: 'state',
            name:'',
            email:'',
            link:'',
            post:'',
            editorState:EditorState.createEmpty(),
        }
       
        this.check=this.check.bind(this);
        this.onContentStateChange=this.onContentStateChange.bind(this);
        this.onEditorStateChange=this.onEditorStateChange.bind(this);
    }
    onEditorStateChange(editorState){
        this.setState({
            some:editorState,
        });
      };
    onContentStateChange(contentState){
     
        this.setState({
          contentState,
        });
      };
    check(){
        console.log(this.state.editorState);
    }
      updatename = (name) => {
        this.setState({name})
      }
      updatepost = (post) => {
          console.log(post);
        this.setState({post})
      }
    render(){
        const { editorState } = this.state;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 mt-5">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="name" md={2}>Name<span style={{color:'red'}}>*</span></Label>
                            <Col md={8}>
                                <Input type="text" id="name" name="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                     onChange={(e) => this.updatename(e.target.value)} /> 
                                 {/*< ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email<span style={{color:'red'}}>*</span></Label>
                            <Col md={8}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Your iiitp email"
                                    value={this.state.email}/>
                                    {/* onChange={(e) => this.updatename(e.target.value)}  
                                 < ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="link" md={2}>Your Profile url<span style={{color:'red'}}></span></Label>
                            <Col md={8}>
                                <Input type="url" id="link" name="link"
                                    placeholder="Url for your Linkdin or Github or Facebook or etc."
                                    value={this.state.link}/>
                                    {/* onChange={(e) => this.updatename(e.target.value)}  
                                 < ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="post" md={2}>Post<span style={{color:'red'}}>*</span></Label>
                            <Col md={8} style={{border:'1px solid'}}>
                                    <Editor
                                          wrapperClassName="demo-wrapper"
                                          editorClassName="demo-editor"
                                          onContentStateChange={()=>this.onContentStateChange}
                                    />

                    
                                {/* <Input type="textarea" id="post" name="post" rows={6}
                                    placeholder="Start creating your post"
                                    value={this.state.post}/> */}
                                    {/* onChange={(e) => this.updatename(e.target.value)}  
                                 < ValidationMessage valid={this.state.validname} message={this.state.errmessage.name} /> */}
                            </Col>
                        </FormGroup>
              </Form>
              <Button onClick={this.check}>Check</Button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Postblog;
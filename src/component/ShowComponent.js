import React,{Component} from 'react';
import parse from 'html-react-parser';
import '../css/Show.css';


import{Link} from 'react-router-dom';
;

class Show extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const blog=this.props.data;
        const prevblog=this.props.prevdata;
        const nextblog=this.props.nextdata;
        return(
        // <div className="bg-white" style={{padding:10}}>{parse(this.props.data.content)}</div>
        <div className="bg-white">
        <div className="container" style={{padding:10}}>
            <div className="row">
            <main className="post blog-post col-lg-8"> 
          <div className="container">
            <div className="post-single">
              <div className="post-thumbnail" ><img src={blog.image} alt="..." className="img-fluid view-image" style={{'border-radius': 25}}/></div>
              <div className="post-details">
                <div className="post-meta d-flex justify-content-between">
                  <div className="category"><a href="#">{blog.type}</a></div>
                </div>
                <h1>{blog.title}</h1>
                <div className="post-footer d-flex align-items-center flex-column flex-sm-row"><a href="#" className="author d-flex align-items-center flex-wrap">
                    <div className="avatar"><img src={blog.userProfile} alt="..." className="img-fluid"/></div>
                      <div className="title"><span>{blog.user}</span></div></a>
                  <div className="d-flex align-items-center flex-wrap">       
                    <div className="date"><i className="fa fa-clock-o"></i>{blog.date} </div>
                    <div className="views"><i className='fa fa-book' ></i> {blog.time}</div>
                  </div>
                </div>
                <div className="post-body">
                {parse(blog.content)}
                  <blockquote className="blockquote">
                    <p>"{blog.quote}"</p>
                    <footer className="blockquote-footer">{blog.quoteby}
                      <cite title="Source Title"></cite>
                    </footer>
                  </blockquote>
                </div>
                <div className="posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row"><a href={`${prevblog.id}`} className="prev-post text-left d-flex align-items-center">
                    <div className="icon prev"><i className="fa fa-angle-left"></i></div>
                    <div className="text"><strong className="text-primary">Previous Post </strong>
                        <h6>{prevblog.title}</h6>
                    </div></a><a href={`${nextblog.id}`} className="next-post text-right d-flex align-items-center justify-content-end">
                    <div className="text"><strong className="text-primary">Next Post </strong>
                      <h6>{nextblog.title}</h6>
                    </div>
                    <div className="icon next"><i className="fa fa-angle-right"></i></div></a></div>
              </div>
            </div>
          </div>
        </main>
            </div>
        </div>
        </div>
        );
    }
}
export default Show;
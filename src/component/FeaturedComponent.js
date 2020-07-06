import React from 'react';
import { Fade, Stagger } from 'react-animation-components';
import {Card,CardHeader,CardBody,Media} from 'reactstrap';
import './styles.css';
function RenderList({blog}){
    return (
                <div className="row d-flex align-items-stretch">
                <div className="text col-md-8">
                <div className="text-inner d-flex align-items-center">
                    <div className="content">
                    <header className="post-header">
                        <h2 className="h4">{blog.title}</h2>
                    </header>
                    <p>{blog.description}</p>
                    <footer className=" post-footer d-flex align-items-center"><a href="#" className="author d-flex align-items-center flex-wrap">
                        <div className="avatar"><img src={blog.userProfile} alt="..." className="img-fluid"/></div>
                        <div className="title"><span>{blog.user}</span></div></a>
                        <div className="date"><i className="fa fa-clock-o" ></i> 2 months ago</div>
                        <div className="comments"><i className="fa fa-heart" style={{color:'red'}} ></i>{blog.likes}</div>
                    </footer>
                    </div>
                </div>
                </div>
                <div className="image col-md-4 align-items-center" s><img src={blog.image} alt="..."  style={{height:200}}/></div>
            </div> 

    );

}


function Featured(props){
    const list= props.featured.map(item => 
                    <RenderList blog={item}/>
               
                );
              
    return(
        <div className="container mt-5">
        <section class="featured-posts">
            {list}
        </section>
        </div>
    
    );
}

export default Featured;
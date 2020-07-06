import React from 'react';
import { Fade, Stagger } from 'react-animation-components';
<<<<<<< HEAD
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
function RenderList({ blog }) {
  return (
    <Media className='mb-5'>
      <Media
        object
        src={blog.image}
        alt={blog.title}
        className='mr-2'
        style={{ width: '50%', 'border-radius': 25 }}
      />
      <Media body>
        <Media heading className='mt-0'>
          <h3>{blog.title}</h3>
        </Media>
        <div className='ml-auto'>{blog.date}</div>
        <p> {blog.description}</p>
        <i
          class='fa fa-heart'
          aria-hidden='true'
          style={{ color: 'red' }}
        ></i>{' '}
        {blog.likes}
      </Media>
    </Media>
  );
}

function Featured(props) {
  const list = (
    <Stagger in>
      {props.featured.map((item) => {
        return (
          <Fade in>
            <li>
              <RenderList blog={item} />
            </li>
          </Fade>
        );
      })}
    </Stagger>
  );
  return (
    <div>
      <Card>
        <CardHeader>Featured Post</CardHeader>
        <CardBody inverse>
          <Media list className='list-unstyled'>
            {list}
          </Media>
        </CardBody>
      </Card>
    </div>
  );
=======
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
>>>>>>> 59514de2a82c01713a5020c39531b7ac7a7dbe73
}

export default Featured;

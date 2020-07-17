import React from 'react';
import { Fade, Stagger } from 'react-animation-components';
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
import '../css/styles.css';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function RenderList({ blog, index }) {
  console.log(index);
  if (index & 1)
    return (
      <div className='row d-flex align-items-stretch'>
        <div className='text d-block col-12 col-lg-9'>
          <div className='text-inner d-flex align-items-center'>
            <div className='content'>
              <header className='post-header'>
                <h2 className='h4'>
                  <Link to={`${blog.type}/${blog.id}`}>{blog.title}</Link>
                </h2>
              </header>
              <p>{blog.description}</p>
              <footer className=' post-footer d-flex align-items-center'>
                <a
                  href={blog.link}
                  target='_blank'
                  className='author d-flex align-items-center flex-wrap '
                >
                  <div className='avatar'>
                    <img
                      src={blog.userProfile}
                      alt='...'
                      className='img-fluid'
                    />
                  </div>
                  <div className='title'>
                    <span>{blog.user}</span>
                  </div>
                </a>
                <div className='date'>
                  <i className='fa fa-clock-o'></i>
                  {blog.date}
                </div>
                <div className='comments'>
                  <i className='fa fa-book'></i>
                  {blog.time}
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div className='image d-none d-md-block col-12 col-lg-3'>
          <img className='image-fluid' src={blog.image} alt='...' />
        </div>
      </div>
    );
  else
    return (
      <div className='row d-flex align-items-stretch'>
        <div className='image d-none d-md-block col-12 col-lg-3'>
          <img className='image-fluid' src={blog.image} alt='...' />
        </div>
        <div className='text d-block col-12 col-lg-9'>
          <div className='text-inner d-flex align-items-center'>
            <div className='content'>
              <header className='post-header'>
                <h2 className='h4'>
                  <Link to={`${blog.type}/${blog.id}`}>{blog.title}</Link>
                </h2>
              </header>
              <p>{blog.description}</p>
              <footer className=' post-footer d-flex align-items-center'>
                <a
                  href={blog.link}
                  target='_blank'
                  className='author d-flex align-items-center flex-wrap'
                >
                  <div className='avatar'>
                    <img
                      src={blog.userProfile}
                      alt='...'
                      className='img-fluid'
                    />
                  </div>
                  <div className='title'>
                    <span>{blog.user}</span>
                  </div>
                </a>
                <div className='date'>
                  <i className='fa fa-clock-o'></i> {blog.date}
                </div>
                <div className='comments'>
                  <i className='fa fa-book'></i>
                  {blog.time}
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
}

function Featured(props) {
  const list = props.featured.map((item, index) => (
    <RenderList blog={item} index={index} />
  ));

  return (
    <ScrollAnimation animateIn='animate__flipOutY'>
      <section class='featured-posts no-padding-top'>
        <div className='container mt-5'>{list}</div>
      </section>
    </ScrollAnimation>
  );
}

export default Featured;

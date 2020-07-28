import React from 'react';
import { Fade, Stagger } from 'react-animation-components';
import '../css/FeaturedComponent.css';

function RenderList({ blog, index }) {
  console.log(index);
  if (index & 1)
    return (
      <div class='row d-flex align-items-stretch '>
        <div class='image col-lg-4'>
          <img src={blog.image} alt='...' />
        </div>
        <div class='text col-lg-8'>
          <div class='text-inner d-flex align-items-center'>
            <div class='content'>
              <header class='post-header'>
                <div class='category'>
                  <a href={blog.type}>{blog.type}</a>
                </div>
                <a href={`${blog.type}/${blog.id}`}>
                  <h2 class='h4'>{blog.title}</h2>
                </a>
              </header>
              <p>{blog.description}</p>
              <footer class='post-footer d-flex align-items-center'>
                <a
                  href={blog.link}
                  target='_blank'
                  class='author d-flex align-items-center flex-wrap'
                >
                  <div class='avatar'>
                    <img src={blog.userProfile} alt='...' class='img-fluid' />
                  </div>
                  <div class='title'>
                    <span>{blog.user}</span>
                  </div>
                </a>
                <div class='date'>
                  <i class='fa fa-clock-o'></i>
                  {blog.date}
                </div>
                <div class='comments  d-none d-md-block'>
                  <i class='fa fa-book'> {blog.time}</i>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div class='row d-flex align-items-stretch '>
        <div class='text col-lg-8'>
          <div class='text-inner d-flex align-items-center'>
            <div class='content'>
              <header class='post-header'>
                <div class='category'>
                  <a href={blog.type}>{blog.type}</a>
                </div>
                <a href={`${blog.type}/${blog.id}`}>
                  <h2 class='h4'>{blog.title}</h2>
                </a>
              </header>
              <p>{blog.description}</p>
              <footer class='post-footer d-flex align-items-center'>
                <a
                  target='_blank'
                  href={blog.link}
                  class='author d-flex align-items-center flex-wrap'
                >
                  <div class='avatar'>
                    <img src={blog.userProfile} alt='...' class='img-fluid' />
                  </div>
                  <div class='title'>
                    <span>{blog.user}</span>
                  </div>
                </a>
                <div class='date '>
                  <i class='fa fa-clock-o'></i>
                  {blog.date}
                </div>
                <div class='comments  d-none d-md-block'>
                  <i class='fa fa-book'></i>
                  {blog.time}
                </div>
              </footer>
            </div>
          </div>
        </div>
        <div class='image col-lg-4'>
          <img src={blog.image} alt='...' />
        </div>
      </div>
    );
}

function Featured(props) {
  return (
    <section class='featured-posts no-padding-top mt-5 '>
      <div
        class='container gradient-border'
        style={{ fontFamily: 'Ubuntu,sans-serif' }}
      >
        <Stagger in>
          {props.featured.map((item, index) => (
            <Fade>
              <RenderList blog={item} index={index} />
            </Fade>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export default Featured;

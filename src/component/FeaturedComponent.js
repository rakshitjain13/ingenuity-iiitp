import React from 'react';
import { Fade, Stagger } from 'react-animation-components';
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
// import '../css/styles.css';
import { Link } from 'react-router-dom';

function RenderList({ blog, index }) {
  console.log(index);
  if (index & 1)
    return (
      <div class="row d-flex align-items-stretch">
      <div class="image col-lg-4"><img src={blog.image} alt="..."/></div>
      <div class="text col-lg-8">
        <div class="text-inner d-flex align-items-center">
          <div class="content">
            <header class="post-header">
              <div class="category"><a href={blog.type}>{blog.type}</a></div><a href={`${blog.type}/${blog.id}`}>
                <h2 class="h4">{blog.title}</h2></a>
            </header>
            <p>{blog.description}</p>
            <footer class="post-footer d-flex align-items-center"><a href={blog.link} class="author d-flex align-items-center flex-wrap">
                <div class="avatar"><img src={blog.userProfile} alt="..." class="img-fluid"/></div>
                <div class="title"><span>{blog.user}</span></div></a>
              <div class="date d-none d-md-block"><i class="fa fa-clock-o"></i>{blog.date}</div>
              <div class="comments"><i class="fa fa-book"> {blog.time}</i></div>
            </footer>
          </div>
        </div>
      </div>
    </div>
      // <div className='row d-flex align-items-stretch'>
      //   <div className='text d-block col-12 col-lg-9'>
      //     <div className='text-inner d-flex align-items-center'>
      //       <div className='content'>
      //         <header className='post-header'>
      //           <h2 className='h4 p-home ml-0'>
      //             <Link to={`${blog.type}/${blog.id}`}>{blog.title}</Link>
      //           </h2>
      //         </header>
      //         <p className="p-home">{blog.description}</p>
      //         <footer className=' post-footer d-flex align-items-center'>
      //           <a
      //             href={blog.link}
      //             target='_blank'
      //             className='author d-flex align-items-center flex-wrap '
      //           >
      //             <div className='avatar'>
      //               <img
      //                 src={blog.userProfile}
      //                 alt='...'
      //                 className='img-fluid'
      //               />
      //             </div>
      //             <div className='title'>
      //               <span>{blog.user}</span>
      //             </div>
      //           </a>
      //           <div className='date d-none d-md-block'>
      //             <i className='fa fa-clock-o'></i>
      //             {blog.date}
      //           </div>
      //           <div className='comments'>
      //             <i className='fa fa-book'></i>
      //             {blog.time}
      //           </div>
      //         </footer>
      //       </div>
      //     </div>
      //   </div>
      //   <div className='image d-none d-md-block col-12 col-lg-3'>
      //     <img className='image-fluid' src={blog.image} alt='...' />
      //   </div>
      // </div>
    );
  else
    return (
      <div class="row d-flex align-items-stretch">
      <div class="text col-lg-8">
        <div class="text-inner d-flex align-items-center">
          <div class="content">
            <header class="post-header">
           <div class="category"><a href={blog.type}>{blog.type}</a></div><a href={`${blog.type}/${blog.id}`}>
                <h2 class="h4">{blog.title}</h2></a>
            </header>
            <p>{blog.description}</p>
            <footer class="post-footer d-flex align-items-center"><a href={blog.link} class="author d-flex align-items-center flex-wrap">
                <div class="avatar"><img src={blog.userProfile} alt="..." class="img-fluid"/></div>
                <div class="title"><span>{blog.user}</span></div></a>
              <div class="date d-none d-md-block"><i class="fa fa-clock-o"></i>{blog.date}</div>
              <div class="comments"><i class="fa fa-book"></i>{blog.time}</div>
            </footer>
          </div>
        </div>
      </div>
      <div class="image col-lg-4"><img src={blog.image} alt="..."/></div>
    </div>
      // <div className='row d-flex align-items-stretch'>
      //   <div className='image d-none d-md-block col-12 col-lg-3'>
      //     <img className='image-fluid' src={blog.image} alt='...' />
      //   </div>
      //   <div className='text d-block col-12 col-lg-9'>
      //     <div className='text-inner d-flex align-items-center'>
      //       <div className='content'>
      //         <header className='post-header'>
      //           <h2 className='h4'>
      //             <Link to={`${blog.type}/${blog.id}`}>{blog.title}</Link>
      //           </h2>
      //         </header>
      //         <p className="p-home">{blog.description}</p>
      //         <footer className=' post-footer d-flex align-items-center'>
      //           <a
      //             href={blog.link}
      //             target='_blank'
      //             className='author d-flex align-items-center flex-wrap'
      //           >
      //             <div className='avatar'>
      //               <img
      //                 src={blog.userProfile}
      //                 alt='...'
      //                 className='img-fluid'
      //               />
      //             </div>
      //             <div className='title'>
      //               <span>{blog.user}</span>
      //             </div>
      //           </a>
      //           <div className='date d-none d-md-block'>
      //             <i className='fa fa-clock-o'></i> {blog.date}
      //           </div>
      //           <div className='comments'>
      //             <i className='fa fa-book'></i>
      //             {blog.time}
      //           </div>
      //         </footer>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
}

function Featured(props) {
  const list = props.featured.map((item, index) => (
    <RenderList blog={item} index={index} />
  ));

  return (
    <section class="featured-posts no-padding-top mt-5">
    <div class="container">
      {list}
      </div>
    </section>
  );
}

export default Featured;

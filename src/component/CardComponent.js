import React, { Component } from 'react';
import '../css/CardComponent.css';

class Gallery extends Component {
  render() {
    return (
      //    <div class='container'>
      //      <div class='grid'>
      //        <div class='row'>
      //          {this.props.data.map((item) => (
      //            <div className="col-lg-4 ">
      //             <figure className='effect-ravi' >
      //                <img src={item.image} alt='...' />
      //                <figcaption>
      //                 <h2>{item.title}</h2>
      //                 <p>
      //                   <a href='#'>
      //                     <i className='fa fa-book fa-lg'></i>
      //                   </a>
      //                 </p>
      //               </figcaption>
      //             </figure>
      //           </div>
      //         ))}
      //       </div>
      //    </div>
      //  </div>

      <section class='latest-posts' style={{ marginTop: '100px' }}>
        <div class='container'>
          <header>
            <h2>Latest from the blog</h2>
            <p class='text-big'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </header>

          <div class='row'>
            <div class='post col-md-4'>
              <div class='post-thumbnail'>
                <a href='post.html'>
                  <img
                    src='https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-1.jpg'
                    alt='...'
                    class='img-fluid'
                  />
                </a>
              </div>
              <div class='post-details'>
                <div class='post-meta d-flex justify-content-between'>
                  <div class='date'>20 May | 2016</div>
                  <div class='category'>
                    <a href='#'>Business</a>
                  </div>
                </div>
                <a href='post.html'>
                  <h3 class='h4'>Ways to remember your important ideas</h3>
                </a>
                <p class='text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div class='post col-md-4'>
              <div class='post-thumbnail'>
                <a href='post.html'>
                  <img
                    src='https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-2.jpg'
                    alt='...'
                    class='img-fluid'
                  />
                </a>
              </div>
              <div class='post-details'>
                <div class='post-meta d-flex justify-content-between'>
                  <div class='date'>20 May | 2016</div>
                  <div class='category'>
                    <a href='#'>Technology</a>
                  </div>
                </div>
                <a href='post.html'>
                  <h3 class='h4'>
                    Diversity in Engineering: Effect on Questions
                  </h3>
                </a>
                <p class='text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>

            <div class='post col-md-4'>
              <div class='post-thumbnail'>
                <img
                  src='https://d19m59y37dris4.cloudfront.net/blog/1-2-1/img/blog-3.jpg'
                  alt='...'
                  class='img-fluid'
                />
              </div>
              <div class='post-details'>
                <div class='post-meta d-flex justify-content-between'>
                  <div class='date'>20 May | 2016</div>
                  <div class='category'>
                    <a href='#'>Financial</a>
                  </div>
                </div>
                <a href='post.html'>
                  <h3 class='h4'>
                    Alberto Savoia Can Teach You About Interior
                  </h3>
                </a>
                <p class='text-muted'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;

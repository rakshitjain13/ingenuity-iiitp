import React, { Component } from 'react';
import '../css/CardComponent.css';

class Gallery extends Component {
  render() {
    const list=this.props.data;
    console.log(list);
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
            {/* <p class='text-big'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p> */}
          </header>
          <div className='row'>
          {list.map(item=>(
                   <div class='post col-md-4'>
                   <div class='post-thumbnail'>
                     <a href='post.html'>
                       <img
                         src={item.image}
                         alt='...'
                         class='img-fluid'
                         style={{
                           width:'350px',
                           height:'250px'
                         }}
                       />
                     </a>
                   </div>
                   <div class='post-details'>
                     <div class='post-meta d-flex justify-content-between'>
                       <div class='date'>{item.date}</div>
                       <div class='category'>
                         <a href='#'>{item.type}</a>
                       </div>
                     </div>
                     <a href='post.html'>
                       <h3 class='h4'>{item.title}</h3>
                     </a>
                     <p class='text-muted'>
                      {item.description}
                     </p>
                   </div>
                 </div>
          ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;

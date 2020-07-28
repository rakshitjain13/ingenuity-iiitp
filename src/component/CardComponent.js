import React, { Component } from 'react';
import '../css/hover-min.css';
class Gallery extends Component {
  render() {
    const list = this.props.data;
    return (
      <section className='latest-posts' style={{ marginTop: '100px' }}>
        <div className='container'>
          <header>
            <h2 style={{ fontFamily: 'Ubuntu,sans-serif' }}>
              Latest from the blog :
            </h2>
          </header>
          <div className='row'>
            {list.map((item) => (
              <div class='post col-md-4'>
                <div
                  class='post-thumbnail hvr-grow'
                  style={{
                    boxShadow:
                      ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  }}
                >
                  <a href={`${item.type}/${item.id}`}>
                    <img
                      style={{ width: '350px', height: '300px' }}
                      src={item.image}
                      alt='...'
                      class='img-fluid'
                    />
                  </a>
                </div>
                <div
                  class='post-details'
                  style={{ fontFamily: 'Ubuntu,sans-serif' }}
                >
                  <div class='post-meta d-flex justify-content-between'>
                    <div class='date'>{item.date}</div>
                    <div class='category'>
                      <a href={item.type}>{item.type}</a>
                    </div>
                  </div>
                  <a href={`${item.type}/${item.id}`}>
                    <h3 className='h4'>{item.title}</h3>
                  </a>
                  <p class='text-muted'>{item.description}</p>
                </div>
              </div>
              // <div className='post col-md-4'>
              //   <div className='post-thumbnail'>
              //     <a href={`${item.type}/${item.id}`}>
              //       <img
              //         src={item.image}
              //         alt='...'
              //         className='img-fluid shrink'
              //         style={{
              //           width: '350px',
              //           height: '300px',
              //         }}
              //       />
              //     </a>
              //   </div>
              //   <div className='post-details'>
              //     <div className='post-meta d-flex justify-content-between'>
              //       <div className='date'>{item.date}</div>
              //       <div className='category'>
              //         <a style={{ color: 'yellow' }} href={item.type} className="p-home">
              //           {item.type}
              //         </a>
              //       </div>
              //     </div>

              //     <Link to={`${item.type}/${item.id}`}>
              //       <h3 className='h4 ml-0'>{item.title}</h3>
              //     </Link>

              //     <p className="p-home" style={{ color: 'white' }}>{item.description}</p>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;

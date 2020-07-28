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
              <div className='post col-md-4'>
                <div
                  className='post-thumbnail hvr-grow'
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
                      className='img-fluid'
                    />
                  </a>
                </div>
                <div
                  className='post-details'
                  style={{ fontFamily: 'Ubuntu,sans-serif' }}
                >
                  <div className='post-meta d-flex justify-content-between'>
                    <div className='date'>{item.date}</div>
                    <div className='category'>
                      <a href={item.type}>{item.type}</a>
                    </div>
                  </div>
                  <a href={`${item.type}/${item.id}`}>
                    <h3 className='h4'>{item.title}</h3>
                  </a>
                  <p className='text-muted'>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;

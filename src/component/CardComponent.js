import React, { Component } from 'react';
import './CardComponent.css';

class Gallery extends Component {
  render() {
    return (
      <div class='container'>
        <div class='grid'>
          <div class='row'>
            {this.props.data.map((item) => (
              <div className='col-md-4'>
                <figure className='effect-ravi'>
                  <img src={item.image} alt='img17' />
                  <figcaption>
                    <h2>{item.title}</h2>
                    <p>
                      <a href='#'>
                        <i className='fa fa-search'></i>
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;

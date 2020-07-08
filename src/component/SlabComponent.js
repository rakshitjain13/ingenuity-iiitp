import React, { Component } from 'react';
import '../css/SlabComponent.css';

class Slab extends Component {
  render() {
    return (
      <section
        className='Slab'
        style={{
          backgroundColor: '#E7717D',
          color: 'white',
          margin: '10px 10px',
        }}
      >
        <div className='container'>
          <div className='row' style={{ padding: '100px' }}>
            <div class='col-md-7'>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slab;
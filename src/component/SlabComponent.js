import React, { Component } from 'react';
import '../css/SlabComponent.css';

class Slab extends Component {
  render() {
    return (
      <section
        className='Slab mt-5'
        style={{
          color: 'Black',
          margin: '10px 0',
        }}
      >
        <div className='container '>
          <div className='row' style={{ padding: '10px' }}>
            <div className='col-md-8 col-12'>
              <h2><strong>
              “I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan
              </strong></h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slab;

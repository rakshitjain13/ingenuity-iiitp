import React, { Component } from 'react';
class Slab extends Component {
  render() {
    return (
      <section
        class='divider slab-style'
        style={{
          boxShadow:
            ' 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <div class='container'>
          <div class='row'>
            <div class='col-md-7'>
              <h2>
                {' '}
                “I’ve missed more than 9,000 shots in my career. I’ve lost
                almost 300 games. 26 times I’ve been trusted to take the game
                winning shot and missed. I’ve failed over and over and over
                again in my life and that is why I succeed.” – Michael Jordan
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slab;

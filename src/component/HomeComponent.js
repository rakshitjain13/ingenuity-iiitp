import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../css/styles.css';
import'../css/slider-animations.css';
import Gallery from './CardComponent';
import Featured from './FeaturedComponent';
import Slab from './SlabComponent';
import PicGallery from './PictureGalleryComponent';
import {data} from '../shared/source';
import{Link} from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data
    };
  }
  render() {
    const content = this.state.data.filter((item) => item.slider);
    const carddata = this.state.data.filter((item) => item.card);
    const featured = this.state.data.filter((item) => item.featured);
    console.log(content);
    return (
      <div>
        <div className='container'>
          <div className='row justify-content-center' style={{ margin: 10 }}>
            <div className='col-12 col-md-10 '>
              <Slider className='slider-wrapper' autoplay={3000}>
                {content.map((item, index) => (
                  <div
                    key={index}
                    className='slider-content'
                    style={{
                      background: `url('${item.image}') no-repeat center center`,
                    }}
                  >
                    <div className='inner'>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <Link to={`${item.type}/${item.id}`}><button>{item.button}</button></Link>
                    </div>
                    <section>
                      <img src={item.userProfile} alt={item.user} />
                      <span>
                        Posted by <strong>{item.user}</strong>
                      </span>
                    </section>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <Slab />
        <Featured featured={featured} />
        <Slab />
        <Gallery key={carddata.id} data={carddata} />
        <PicGallery />
      </div>
    );
  }
}
export default Home;

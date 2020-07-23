import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../css/slider-animations.css';
import Gallery from './CardComponent';
import Featured from './FeaturedComponent';
import Slab from './SlabComponent';
import PicGallery from './PictureGalleryComponent';

import { data } from '../shared/source';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
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
          <div className='row '>
            <div className='col-12 col-lg-6 ' style={{ margin: 10 }}>
              <div className='slider-sh'>
                <Slider autoplay={3000}>
                  {content.map((item, index) => (
                    <div
                      key={index}
                      className='slider-content'
                      style={{
                        background: `url('${item.image}') no-repeat center center`,
                      }}
                    >
                      <div className='inner '>
                        <Link to={`${item.type}/${item.id}`}>
                          <h1>{item.title}</h1>{' '}
                        </Link>
                        {/* <p className='d-md-none  d-xs-block'>{item.short}</p> */}
                        {/* <p className='d-none d-md-block'>{item.description}</p>
                        <Link to={`${item.type}/${item.id}`}>
                          <button className="mt-2">{item.button}</button>
                        </Link> */}
                      </div>
                      <section className='mt-2'>
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
            <div className='col-12 col-lg-5' style={{ margin: 10 }}>
              <div class='card-group slider-sh'>
                <div class='card'>
                  <img
                    class='card-img-top'
                    src={data[0].image}
                    alt='Card image cap'
                  />
                  <div class='card-body'>
                    <h5 class='card-title'>{data[0].title}</h5>
                    <p class='card-text'>{data[0].short}</p>
                  </div>
                  <div class='card-footer'>
                    <small class='text-muted'>{data[0].date}</small>
                  </div>
                </div>
                <div class='card'>
                  <img
                    class='card-img-top'
                    src={data[1].image}
                    alt='Card image cap'
                  />
                  <div class='card-body'>
                    <h5 class='card-title'>{data[1].title}</h5>
                    <p class='card-text'>{data[1].short}</p>
                  </div>
                  <div class='card-footer'>
                    <small class='text-muted'>{data[1].date}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Featured featured={featured} />
        <Slab />
        <Gallery key={carddata.id} data={carddata} />
        <PicGallery />
      </div>
    );
  }
}
export default Home;

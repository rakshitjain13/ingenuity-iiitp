import React, { Component } from 'react';
import '../css/PictureGalleryComponent.css';

class PicGallery extends Component {
  render() {
    return (
      <section class='gallery no-padding'>
        <div class='row'>
          <div class='mix col-lg-3 col-md-3 col-sm-6'>
            <div class='item'>
              <a
                href='assets/images/gallery-1.jpg'
                data-fancybox='gallery'
                class='image'
              >
                <img
                  src='../assets/images/gallery-1.jpg'
                  alt='...'
                  class='img-fluid'
                />
                <div class='overlay d-flex align-items-center justify-content-center'>
                  <i class='icon-search'></i>
                </div>
              </a>
            </div>
          </div>

          <div class='mix col-lg-3 col-md-3 col-sm-6'>
            <div class='item'>
              <a href='img/gallery-2.jpg' data-fancybox='gallery' class='image'>
                <img
                  src='../assets/images/gallery-2.jpg'
                  alt='...'
                  class='img-fluid'
                />
                <div class='overlay d-flex align-items-center justify-content-center'>
                  <i class='icon-search'></i>
                </div>
              </a>
            </div>
          </div>

          <div class='mix col-lg-3 col-md-3 col-sm-6'>
            <div class='item'>
              <a href='img/gallery-3.jpg' data-fancybox='gallery' class='image'>
                <img
                  src='../assets/images/gallery-3.jpg'
                  alt='...'
                  class='img-fluid'
                />
                <div class='overlay d-flex align-items-center justify-content-center'>
                  <i class='icon-search'></i>
                </div>
              </a>
            </div>
          </div>

          <div class='mix col-lg-3 col-md-3 col-sm-6'>
            <div class='item'>
              <a href='img/gallery-4.jpg' data-fancybox='gallery' class='image'>
                <img
                  src='../assets/images/gallery-4.jpg'
                  alt='...'
                  class='img-fluid'
                />
                <div class='overlay d-flex align-items-center justify-content-center'>
                  <i class='icon-search'></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PicGallery;

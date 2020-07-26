import React, { Component } from 'react';
import '../css/ViewComponent.css';
import { Link } from 'react-router-dom';
import Load from './LoaderComponent';
class View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.content != null) {
      var list = this.props.content.filter(
        (item) => item.type == this.props.type
      );
      var firstitem = list[0];
      var otheritem = list.slice(1);
      return (
        <div className='bg-white'>
          <div id='header' class='container c-header'>
            <div class='row'>
              <div
                class='col-md-8 tinted cover-image center-fill-container'
                style={{ margin: '70px 0' }}
              >
                <div class='img-container'>
                  <img
                    class='center-both img-center-fill tall'
                    src={firstitem.image}
                    alt=''
                  />
                </div>
              </div>

              <div class='col-md-4 cover-details'>
                <div class='mt-4'>
                  <div className='a-parent'>
                    <h1>
                      <a
                        href={`${firstitem.type}/${firstitem.id}`}
                        className='cover-link'
                      >
                        {firstitem.title}
                      </a>
                    </h1>
                  </div>
                </div>
                <div class='dt'>
                  {firstitem.date} <span style={{ color: 'blue' }}>|</span>{' '}
                  {firstitem.user}
                </div>
                <div class='dt'>Reading Time : {firstitem.time}</div>
                <div class='cover-excerpt'>{firstitem.description}</div>
              </div>
            </div>
          </div>

          <section class='blog-list px-3 py-5 p-md-5'>
            <div class='container'>
              {otheritem.map((item) => (
                <div className='row'>
                  <div className='col-12 col-md-3'>
                    <div class='media'>
                      <img
                        class='mr-1 img-fluid img-size'
                        src={item.image}
                        alt='website template image'
                      />
                    </div>
                  </div>
                  <div className='col-12 col-md-5 mb-5'>
                    <div class='media-body'>
                      <h3 class='title mb-1 ml-0'>
                        <div className='a-parent'>
                          <a href={`${item.type}/${item.id}`}>{item.title}</a>
                        </div>
                      </h3>
                      <div className='dt ml-1'>
                        {' '}
                        {item.date} <span style={{ color: 'blue' }}>|</span>{' '}
                        {item.user}
                      </div>
                      <div class='dt ml-1'>Reading Time : {item.time}</div>
                      <div class='intro ml-1'>{item.description}</div>
                      {/* <a class='more-link' href='pages/blog-post.php'>
                      Read more →
                    </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      );
    } else {
      return <Load />;
    }
  }
}

export default View;

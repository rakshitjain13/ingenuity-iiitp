import React, { Component } from 'react';
import Helmet from 'react-helmet';
import '../css/ViewComponent.css';
import { Fade, Stagger } from 'react-animation-components';
import Load from './LoaderComponent';
class View extends Component {
  render() {
    if (this.props.content != null) {
      var list = this.props.content.filter(
        (item) => item.type === this.props.type
      );
      var firstitem = list[0];
      var otheritem = list.slice(1);
      return (
        <div className='bg-white'>
          <Helmet title={this.props.type[0].toUpperCase()+this.props.type.slice(1)}/>
          <div id='header' className='container c-header'>
            <div className='row'>
              <div
                className='col-md-8 tinted cover-image center-fill-container mt-5'
              >
                <div className='img-container'>
                  <img
                    className='center-both img-center-fill tall img-check'
                    src={firstitem.image}
                    alt='img'
                  />
                </div>
              </div>

              <div className='col-md-4 cover-details'>
                <div className='mt-1'>
                  <div className='a-parent'>
                    <h1>
                      <a
                        href={`${firstitem.type}/${firstitem.articleid}`}
                        className='cover-link'
                      >
                        {firstitem.title}
                      </a>
                    </h1>
                  </div>
                </div>
                <div className='dt'>
                  {firstitem.date} <span style={{ color: 'blue' }}>|</span>{' '}
                  {firstitem.user}
                </div>
                <div className='dt'>Reading Time : {firstitem.time}</div>
                <div className='cover-excerpt' style={{"fontFamily":"Ubuntu"}}>{firstitem.description}</div>
              </div>
            </div>
          </div>
          <section className='blog-list px-3 py-5 p-md-5'>
            <div className='container'>
              <Stagger in>
                {otheritem.map((item) => (
                  <Fade key={item.id}>
                    <div className='row'>
                      <div className='col-12 col-md-3'>
                        <div className='media'>
                          <img
                            className='mr-1 img-fluid img-size'
                            src={item.image}
                            alt='img'
                          />
                        </div>
                      </div>
                      <div className='col-12 col-md-5 mb-5'>
                        <div className='media-body'>
                          <h3 className='title mb-1 ml-0'>
                            <div className='a-parent'>
                              <a href={`${item.type}/${item.articleid}`}>
                                {item.title}
                              </a>
                            </div>
                          </h3>
                          <div className='dt ml-1'>
                            {' '}
                            {item.date} <span style={{ color: 'blue' }}>|</span>{' '}
                            {item.user}
                          </div>
                          <div className='dt ml-1'>
                            Reading Time : {item.time}
                          </div>
                          <div className='intro ml-1' style={{"fontFamily":"Ubuntu"}}>{item.description}</div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                ))}
              </Stagger>
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

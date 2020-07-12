import React, { Component } from 'react';
import '../css/ViewComponent.css';
import { data } from '../shared/source';
import{Link} from 'react-router-dom';


function View(props){
  var list=data.filter((item)=>item.type==props.type);
  var firstitem=list[0];
  var otheritem=list.slice(1);
    return(
      <div className="bg-white" style={{padding:10}}>
        <div id='header' className='container category-header'>
          <div className='row'>
            <div
              className='col-12 col-md-8 tinted cover-image center-fill-container'
              style={{ margin: '70px 0' }}
            >
              <div className='img-container'>
                <img
                  className='center-both img-center-fill tall'
                  src={firstitem.image}
                  alt=''
                />
              </div>
            </div>

            <div className='col-12 col-md-4 cover-details'>
              <div className='cover-title'>
                <Link to={`${firstitem.type}/${firstitem.id}`} className='cover-link'>
                  <h1 className='title'>
                   {firstitem.title}
                  </h1>
                </Link>
              </div>
              <div className='date'>{firstitem.date}</div>
              <div className='cover-excerpt'>
                {firstitem.description}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className='col-12 col-md-8' style={{ margin:20 }}>
          {
            otheritem.map((item)=>(
              <div className='row  article-horiozntal'>
              <div className='col-12 col-md-4 center-fill-container img-container'>
                <img
                  src={item.image}
                  alt=''
                  className='img-center-fill center-both  wide'
                />
              </div>
              <div className='details-container col-12 col-md-8'>
                <div className='details'>
                  <div className='head'>
                    <h3 className='title ml-0'>
                      <Link to={`${item.type}/${item.id}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <div className='tag'>
                      <a href='/category/summer2019/'>Summer 2019</a>
                    </div>
                    <span className='date ml-1'>{item.date}</span>
                  </div>
                  <div className='excerpt ml-1'>
                    <p>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            ))
          }
        </div>
      </div>
      </div>
    );
};

export default View;

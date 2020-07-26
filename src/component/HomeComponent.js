import React, { Component } from 'react';
import axios from 'axios';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../css/slider-animations.css';
import Gallery from './CardComponent';
import Featured from './FeaturedComponent';
import Slab from './SlabComponent';
import PicGallery from './PictureGalleryComponent';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';
import Load from './LoaderComponent';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.home,
    };
  }

  render() {
    if (this.state.data != null) {
      const content = this.state.data.filter((item) => item.slider);
      const carddata = this.state.data.filter((item) => item.card);
      const featured = this.state.data.filter((item) => item.featured);
      return (
        <div>
          <div className='container'>
            <div className='row '>
              <div className='col-12 col-lg-8 mt-5' >
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
                          <a href={`${item.type}/${item.id}`} >
                            <h1 className="anch-hover">{item.title}</h1>
                          </a>
                          {/* <p className='d-md-none  d-xs-block'>{item.short}</p> */}
                          <p className=''>{item.description}</p>
                        {/* <Link to={`${item.type}/${item.id}`}>
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
              <div className="col-md-4 mt-5 d-none d-md-block">
              <Card className="slider-sh">
                  <CardHeader style={{'background-color':' #0e0e0e'}}tag="h6"><span style={{color:'white'}}>A Place for you..</span></CardHeader>
                  <CardBody style={{'background-color':'#dce0dd'}}>
                    
                    <CardTitle >Create your own Blog!</CardTitle>
                    <CardText>Show your support to enrich the enviornment and culture of the community.  </CardText>
                    <Button href='/postBlog'>Now, It's your Turn!</Button>
                  </CardBody>
                  <CardFooter className="text-muted">Feature yourself !</CardFooter>
                </Card>
              </div>
              {/* <div className="col-12 col-lg-5" style={{margin:10}}>
            <div class="card-group slider-sh" >
                <div class="card">
                  <img class="card-img-top" src={this.state.data[0].image} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">{this.state.data[0].title}</h5>
                    <p class="card-text">{this.state.data[0].short}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">{this.state.data[0].date}</small>
                  </div>
                </div>
                <div class="card" >
                  <img class="card-img-top" src={this.state.data[1].image} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">{this.state.data[1].title}</h5>
                    <p class="card-text">{this.state.data[1].short}</p>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">{this.state.data[1].date}</small>
                  </div>
                </div>
            </div>
          </div> */}
            </div>
          </div>

          <Featured featured={featured} />
          <Slab />
          <Gallery key={carddata.id} data={carddata} />
          <div className=" d-sm-block d-md-none" style={{margin:10}}>
              <Card className="slider-sh">
                  <CardHeader style={{'background-color':' #0e0e0e'}}tag="h6"><span style={{color:'white'}}>A Place for you..</span></CardHeader>
                  <CardBody style={{'background-color':'#dce0dd'}}>
                    
                    <CardTitle >Create your own Blog!</CardTitle>
                    <CardText>Show your support to enrich the enviornment and culture of the community.  </CardText>
                    <Button href='/postBlog'>Now, It's your Turn!</Button>
                  </CardBody>
                  <CardFooter className="text-muted">Feature yourself !</CardFooter>
                </Card>
              </div>
          <PicGallery />
        </div>
      );
    } else{
      return(
        <Load/>
      );
    } 
  }
}
export default Home;

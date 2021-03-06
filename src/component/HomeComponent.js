import React from 'react';
import Slider from 'react-animated-slider';
import '../css/hover-min.css';
import 'react-animated-slider/build/horizontal.css';
import '../css/slider-animations.css';
import Gallery from './CardComponent';
import Featured from './FeaturedComponent';
import Slab from './SlabComponent';
import PicGallery from './PictureGalleryComponent';
import Load from './LoaderComponent';
import Helmet from 'react-helmet';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

const Home=(props)=> {
  const data=props.home;


    if (data != null) {
      const content = data.filter((item) => item.slider);
      const carddata = data.filter((item) => item.card);
      const featured = data.filter((item) => item.featured);
      return (
        <div>
          <Helmet title="Ingenuity | Student Media Body | IIIT PUNE"/>
          <div className='container'>
            <div className='row '>
              <div className='col-12  col-lg-8 mt-5'>
                <div className='slider-sh'>
                  <Slider autoplay={3000} touchDisabled={true}>
                    {content.map((item, index) => (
                      <div
                        key={index}
                        className='slider-content'
                        style={{
                          background: `url('${item.image}') no-repeat center center`,
                        }}
                      >
                        <div className='inner '>
                          <a
                            href={`${item.type}/${item.articleid}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <h1 className='anch-hover'>{item.title}</h1>
                          </a>

                          <p className=''>{item.description}</p>
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
              <div className='col-md-4 mt-5 d-none d-md-block '>
                <Card className='slider-sh hvr-grow' style={{ border: 'none' }}>
                  <CardHeader style={{ backgroundColor: ' #0e0e0e' }} tag='h6'>
                    <span style={{ color: 'white' }}>A Place for you..</span>
                  </CardHeader>
                  <CardBody
                    style={{
                      backgroundColor: '#dce0dd',
                      fontFamily: 'Montserrat',
                    }}
                  >
                    <CardTitle>Create your own Blog!</CardTitle>
                    <CardText style={{ fontFamily: 'Montserrat' }}>
                      Show your support to enrich the environment and culture of
                      the community.{' '}
                    </CardText>
                    <Button href='/postBlog'>Now, It's your Turn!</Button>
                  </CardBody>
                  <CardFooter className='text-muted'>
                    Feature yourself !
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          <Featured featured={featured} />
          <Slab />
          <Gallery key={carddata.id} data={carddata} />
          <div className=' d-sm-block d-md-none' style={{ margin: '10px' }}>
            <Card className='slider-sh'>
              <CardHeader style={{ backgroundColor: ' #0e0e0e' }} tag='h6'>
                <span style={{ color: 'white' }}>A Place for you..</span>
              </CardHeader>
              <CardBody
                style={{
                  backgroundColor: '#dce0dd',
                  fontFamily: 'Montserrat',
                }}
              >
                <CardTitle>Create your own Blog!</CardTitle>
                <CardText style={{ fontFamily: 'Montserrat' }}>
                  Show your support to enrich the environment and culture of the
                  community.{' '}
                </CardText>
                <Button href='/postBlog'>Now, It's your Turn!</Button>
              </CardBody>
              <CardFooter className='text-muted'>Feature yourself !</CardFooter>
            </Card>
          </div>
          <PicGallery />
        </div>
      );
    } else {
      return <Load />;
    }
}
export default Home;

import React from 'react';
import '../css/AboutUsComponent.css';
import AddIcon from '@material-ui/icons/Add';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Helmet from 'react-helmet';
const TeamPage = () => {
  return (
    <div className='bg-white'>
      <Helmet title='About Us' />
      <section id='team' className='pb-5'>
        <div className='container'>
          <div
            className='title-about section-title'
            style={{ fontFamily: 'Ubuntu' }}
          >
            About Us
          </div>
          <div
            className='about-body mb-4'
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              textAlign: 'center',
            }}
          >
            Ingenuity is the official campus media body of the Indian Institute
            of Informaton Technology,Pune run by students under the patronage of
            Government of India.After 4 years of development,Ingenuity has
            rolled out as student media body to offer news and your needs for
            betterment of all around of campus through this website.
          </div>
          <hr />
        </div>
        <div className='container'>
          <h5 className='section-title h1' style={{ fontFamily: 'Ubuntu' }}>
            Founders
          </h5>
          <div className='row justify-content-center'>
            <div className='col-xs-12 col-sm-6 col-md-4 '>
              <div
                className='image-flip'
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className='mainflip'>
                  <div className='frontside'>
                    <div className='card'>
                      <div className='card-body text-center'>
                        <p>
                          <img
                            className=' img-fluid'
                            src='https://media-exp1.licdn.com/dms/image/C5103AQEfuswPxV6Gyw/profile-displayphoto-shrink_200_200/0?e=1600300800&v=beta&t=pqPi-uT4qWUH0TTo6ZoO3QVa5kHzrwIUaWPu0Sq4rc8'
                            alt='img'
                          />
                        </p>
                        <h4 className='card-title'>Rohan Lekhwani </h4>
                        <p className='card-text'>Co-Founder</p>
                        <a href='#' className='btn btn-primary btn-sm'>
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='backside'>
                    <div className='card'>
                      <div className='card-body text-center mt-4'>
                        <h4 className='card-title'>Rohan Lekhwani</h4>
                        <p className='card-text'>
                          I enjoy building cool stuff and taking part in
                          Hackathons and have been in the Top 1% in several of
                          them.
                        </p>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://www.instagram.com/rohanlekhwani/'
                              target='_blank'
                            >
                              <InstagramIcon />
                            </a>
                          </li>

                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://www.linkedin.com/in/rohanlekhwani/'
                              target='_blank'
                            >
                              <LinkedInIcon />
                            </a>
                          </li>
                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://github.com/RonLek'
                              target='_blank'
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-4'>
              <div
                className='image-flip'
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className='mainflip'>
                  <div className='frontside'>
                    <div className='card'>
                      <div className='card-body text-center'>
                        <p>
                          <img
                            className=' img-fluid'
                            src='https://media-exp1.licdn.com/dms/image/C4E03AQHOIvwKW4Srsg/profile-displayphoto-shrink_200_200/0?e=1603929600&v=beta&t=4fC3ezjh7hRw2oIMqCc97NhlsSAa2mSwUFlFVPHJPgk'
                            alt='img'
                          />
                        </p>
                        <h4 className='card-title'>Saksham Mahajan</h4>
                        <p className='card-text'>Co-Founder and Chief Editor</p>
                        <a href='#' className='btn btn-primary btn-sm'>
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='backside'>
                    <div className='card '>
                      <div className='card-body text-center mt-4'>
                        <h4 className='card-title'>Saksham Mahajan</h4>
                        <p className='card-text'>
                          <br />
                          Just another Sophomore who's exploring new things.
                        </p>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://www.instagram.com/sakshammahajan_/'
                              target='_blank'
                            >
                              <InstagramIcon />
                            </a>
                          </li>

                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://www.linkedin.com/in/saksham-mahajan/'
                              target='_blank'
                            >
                              <LinkedInIcon />
                            </a>
                          </li>

                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://github.com/mahajansaksham'
                              target='_blank'
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <h5 className='section-title h1' style={{ fontFamily: 'Ubuntu' }}>
            Web Development Team
          </h5>
          <div className='row justify-content-center'>
            <div className='col-xs-12 col-sm-6 col-md-4'>
              <div
                className='image-flip'
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className='mainflip'>
                  <div className='frontside'>
                    <div className='card'>
                      <div className='card-body text-center'>
                        <p>
                          <img
                            className=' img-fluid'
                            src='https://media-exp1.licdn.com/dms/image/C4E03AQHXhha9zl_AhA/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=vOb-gAmKOkoqHVZqHFTgDewYeCyhRvM5BN-8OXstfa0'
                            alt='card image'
                          />
                        </p>
                        <h4 className='card-title'>Mukhrit Gupta</h4>
                        <p className='card-text'>Web Manager</p>
                        <a href='#' className='btn btn-primary btn-sm'>
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='backside'>
                    <div className='card'>
                      <div className='card-body text-center mt-4'>
                        <h4 className='card-title'>Mukhrit Gupta</h4>
                        <p className='card-text'>
                          'Every act of creation is first an act of
                          destruction.' ~Pablo Picasso
                        </p>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://www.instagram.com/mukuboi/'
                              target='_blank'
                            >
                              <InstagramIcon />
                            </a>
                          </li>

                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://www.linkedin.com/in/mukhrit-gupta-553196194/'
                              target='_blank'
                            >
                              <LinkedInIcon />
                            </a>
                          </li>
                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://github.com/Mukhrit'
                              target='_blank'
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xs-12 col-sm-6 col-md-4'>
              <div
                className='image-flip'
                ontouchstart="this.classNameList.toggle('hover');"
              >
                <div className='mainflip'>
                  <div className='frontside'>
                    <div className='card'>
                      <div className='card-body text-center'>
                        <p>
                          <img
                            className=' img-fluid'
                            src='https://media-exp1.licdn.com/dms/image/C5603AQEMeG2ptsblrw/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=jQgVIWIucHtBr6dRBwBAnHnN1Nl4m2Wmc29T56xDzhA'
                            alt='card image'
                          />
                        </p>
                        <h4 className='card-title'>Rakshit Jain</h4>
                        <p className='card-text'>Web Manager</p>
                        <a href='#' className='btn btn-primary btn-sm'>
                          <AddIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='backside'>
                    <div className='card'>
                      <div className='card-body text-center mt-4'>
                        <h4 className='card-title'>Rakshit Jain</h4>
                        <p className='card-text'>
                          Everthing is connected.What if everything that came
                          from the frontend was influenced by the backend .{' '}
                        </p>
                        <ul className='list-inline'>
                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://www.instagram.com/rakshitjain13/'
                              target='_blank'
                            >
                              <InstagramIcon />
                            </a>
                          </li>

                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://www.linkedin.com/in/rakshit-jain-9b83b5170/?originalSubdomain=in'
                              target='_blank'
                            >
                              <LinkedInIcon />
                            </a>
                          </li>
                          <li className='list-inline-item'>
                            <a
                              className='social-icon text-xs-center'
                              href='https://github.com/rakshitjain13'
                              target='_blank'
                            >
                              <GitHubIcon />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </section>
    </div>
  );
};

export default TeamPage;

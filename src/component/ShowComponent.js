import React from 'react';
import parse from 'html-react-parser';
import Helmet from 'react-helmet';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const Show =(props)=> {
 
    if (
     props.data != null &&
     props.prevdata != null &&
      props.nextdata != null
    ) {
      const blog =props.data;
      const prevblog =props.prevdata;
      const nextblog =props.nextdata;
      return (
        <div className='bg-white'>
          <Helmet title={blog.title}/>
          <div className='container' style={{ padding: 10 }}>
            <div className='row'>
              <main className='post blog-post col-lg-8'>
                <div className='container'>
                  <div className='post-single'>
                    <div className='post-thumbnail'>
                      <img
                        src={blog.image}
                        alt='...'
                        className='img-fluid view-image'
                        style={{ 'border-radius': 25, height: '350px' }}
                      />
                    </div>
                    <div className='post-details'>
                      <div className='post-meta d-flex justify-content-between'>
                        <div className='category'>
                          <a href={'/' + blog.type}>{blog.type}</a>
                        </div>
                      </div>
                      <h1>{blog.title}</h1>
                      <div className='post-footer d-flex align-items-center flex-column flex-sm-row'>
                        <a
                          href={blog.link}
                          className='author d-flex align-items-center flex-wrap'
                          target='_blank'
                        >
                          <div className='avatar'>
                            <img
                              src={blog.userProfile}
                              alt='...'
                              className='img-fluid'
                            />
                          </div>
                          <div className='title'>
                            <span>{blog.user}</span>
                          </div>
                        </a>
                        <div className='d-flex align-items-center flex-wrap'>
                          <div className='date'>
                            <ScheduleIcon style={{fontSize:15}}/>
                          {' '}{blog.date}{' '}
                          </div>
                          <div className='views'>
                            <ChromeReaderModeIcon style={{fontSize:15}}/>{' '} {blog.time}
                          </div>
                        </div>
                      </div>
                      <div className='post-body'>
                        {parse(blog.content)}
                        <blockquote className='blockquote'>
                          <div>"{blog.quote}"</div>
                          <footer className='blockquote-footer'>
                            {blog.quoteby}
                            <cite title='Source Title'></cite>
                          </footer>
                        </blockquote>
                      </div>
                      <div className='posts-nav d-flex justify-content-between align-items-stretch flex-column flex-md-row'>
                        <a
                          href={`/${prevblog.type}/${prevblog.articleid}`}
                          className='prev-post text-left d-flex align-items-center'
                        >
                          <div className='icon prev'>
                            <KeyboardArrowLeftIcon />
                          </div>
                          <div className='text'>
                            <strong className='text-primary'>
                              Previous Post{' '}
                            </strong>
                            <h6>{prevblog.title}</h6>
                          </div>
                        </a>
                        <a
                          href={`/${nextblog.type}/${nextblog.articleid}`}
                          className='next-post text-right d-flex align-items-center justify-content-end'
                        >
                          <div className='text'>
                            <strong className='text-primary'>Next Post </strong>
                            <h6>{nextblog.title}</h6>
                          </div>
                          <div className='icon next'>
                          <KeyboardArrowRightIcon/>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      );
    }
}
export default Show;

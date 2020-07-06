import React from 'react';
import { Fade, Stagger } from 'react-animation-components';
import { Card, CardHeader, CardBody, Media } from 'reactstrap';
function RenderList({ blog }) {
  return (
    <Media className='mb-5'>
      <Media
        object
        src={blog.image}
        alt={blog.title}
        className='mr-2'
        style={{ width: '50%', 'border-radius': 25 }}
      />
      <Media body>
        <Media heading className='mt-0'>
          <h3>{blog.title}</h3>
        </Media>
        <div className='ml-auto'>{blog.date}</div>
        <p> {blog.description}</p>
        <i
          class='fa fa-heart'
          aria-hidden='true'
          style={{ color: 'red' }}
        ></i>{' '}
        {blog.likes}
      </Media>
    </Media>
  );
}

function Featured(props) {
  const list = (
    <Stagger in>
      {props.featured.map((item) => {
        return (
          <Fade in>
            <li>
              <RenderList blog={item} />
            </li>
          </Fade>
        );
      })}
    </Stagger>
  );
  return (
    <div>
      <Card>
        <CardHeader>Featured Post</CardHeader>
        <CardBody inverse>
          <Media list className='list-unstyled'>
            {list}
          </Media>
        </CardBody>
      </Card>
    </div>
  );
}

export default Featured;

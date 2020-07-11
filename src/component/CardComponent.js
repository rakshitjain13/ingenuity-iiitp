import React, { Component } from 'react';
import '../css/CardComponent.css';
import{Link} from 'react-router-dom';


class Gallery extends Component {
  render() {
    const list=this.props.data;
    console.log(list);
    return (

      <section className='latest-posts' style={{ marginTop: '100px' }}>
        <div className='container'>
          <header>
            <h2>Latest from the blog</h2>
          </header>
          <div className='row'>
          {list.map(item=>(
                   <div className='post col-md-4'>
                   <div className='post-thumbnail'>
                     <a href='post.html' >
                       <img
                         src={item.image}
                         alt='...'
                         className='img-fluid shrink'
                         style={{
                           width:'350px',
                           height:'300px'
                         }}
                       />
                     </a>
                   </div>
                   <div className='post-details'>
                     <div className='post-meta d-flex justify-content-between'>
                       <div className='date'>{item.date}</div>
                       <div className='category'>
                         <a href='#'>{item.type}</a>
                       </div>
                     </div>
                    
                     <Link to={`${item.type}/${item.id}`}><h3 className='h4'>{item.title}</h3></Link>
             
                     <p className='text-muted'>
                      {item.description}
                     </p>
                   </div>
                 </div>
          ))
          }
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;

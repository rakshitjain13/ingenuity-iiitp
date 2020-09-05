import React from 'react';
import Loader from 'react-loader-spinner';

function Loadtest(props) {
  return (
    <div
      className='justify-content-center'
      style={{ marginLeft: '47%', justifyContent: 'center' }}
    >
      <Loader type='ThreeDots' color='#000' height={60} width={60} />
    </div>
  );
}
export default Loadtest;
// import React from 'react';
// import Loader from 'react-loader-spinner';

// function Load(props) {
//   return (
//     <div
//       className='justify-content-center'
//       style={{ marginLeft: '47%', justifyContent: 'center' }}
//     >
//       <Loader type='ThreeDots' color='#000' height={60} width={60} />
//     </div>
//   );

// export default Load;
import React from 'react';
import '../css/Loader.css';

function Load() {
  return (
    <div>
      <div id='preloader'>
        <div id='loader'></div>
      </div>
    </div>
  );
}
export default Load;

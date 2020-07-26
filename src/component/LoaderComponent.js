import React from 'react';
import Loader from 'react-loader-spinner'

function Load(props){
    return(
        <div className="justify-content-center" style={{'margin-left':'47%','justify-content': 'center'}}>
             <Loader type="ThreeDots" color="#000" height={60} width={60} />
             </div>
       );
}
export default Load;
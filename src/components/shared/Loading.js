import React from 'react';
import Spinner from '../../assets/gif/spinner.gif'

const Loading = () => {
  return (
    <div style={{width: "100%", textAlign: "center"}}>
        <img src={Spinner} alt="Loading" />
    </div>
  )
}

export default Loading
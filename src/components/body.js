import React from 'react'
import './body.css';

function Body() {
  return (
    <div className='body-container'>

      <h1>Build a connection with your care <br /> provider on your own terms.</h1>
      <h4 className="belowHeader">You search, we show you providers, you contact them to start the conversaton.</h4>
      <h1>1</h1>
      <h4 className="belowHeader">Browse resources near you</h4>
      <div id='magnify'></div>
      <h1>2</h1>
      <h4 className="belowHeader">Collect their contact information</h4>
      <div id='magnify'></div>
      <h1>3</h1>
      <h4 className="belowHeader">Control the conversation: reach out via<br />phone or email to discuss costs and see<br /> if they're right for you</h4>


    </div>
  );
}

export default Body;
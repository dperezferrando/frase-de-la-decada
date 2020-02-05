import React from 'react';
import Cloak from './cloak';

const WithCloak = (MyComponent) => {
  return (
    (props) => 
      <Cloak trolo={props.trolo}>
        <MyComponent {...props}/>
      </Cloak>
  );
}

export default WithCloak

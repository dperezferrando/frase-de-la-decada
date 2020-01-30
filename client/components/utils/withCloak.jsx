import React from 'react';
import Cloak from './cloak';

const WithCloak = (MyComponent) => {
  return (
    (props) =>
      <Cloak>
        <MyComponent {...props}/>
      </Cloak>
  );
}

export default WithCloak

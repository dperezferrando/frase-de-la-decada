import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import DefaultPlaceholder from './defaultPlaceholder';

export const WithLoading = (MyComponent, MyPlaceholder = DefaultPlaceholder) => {
  const ComponentWithLoading =  ({ isLoading, showCloak, ...props }) => {
    return isLoading ? <MyPlaceholder {...props}/> : (<MyComponent {...props}/>);
  }
  return ComponentWithLoading;
};

export default WithLoading;

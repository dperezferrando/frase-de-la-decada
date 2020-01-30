import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import DefaultPlaceholder from './defaultPlaceholder';
import WithCloak from "./withCloak";

export const WithLoading = (MyComponent, MyPlaceholder = DefaultPlaceholder) => {
  const ComponentWithLoading =  ({ isLoading, showCloak, ...props }) => {
    const LoadingComponent = showCloak ? WithCloak(MyComponent) : MyPlaceholder;
    return isLoading ? <LoadingComponent {...props}/> : (<MyComponent {...props}/>);
  }
  return ComponentWithLoading;
};


export default WithLoading;

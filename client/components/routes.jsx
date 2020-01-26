import React from "react";
import Component from "../utils/component";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ExampleContainer from "../containers/example";

const HolaMundo = () => <h1>Hola Mundo</h1>;  


class Routes extends Component {
  render(){
    return <BrowserRouter>
      <Switch>
        <Route exact path="/inicio" component={HolaMundo}/>
        <Route exact path="/test" component={ExampleContainer}/>
      </Switch>
    </BrowserRouter>
  }
}

export default Routes;
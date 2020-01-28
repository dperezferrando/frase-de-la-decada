import React from "react";
import Component from "../utils/component";
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ExampleContainer from "../containers/example";
import Navbar from "../containers/navbar";
import Qualifiers from "../containers/qualifiers";

const HolaMundo = () => <h1>Hola Mundo</h1>;  

class Routes extends Component {
  render(){
    return <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/inicio" component={HolaMundo}/>
        <Route exact path="/qualifiers" component={Qualifiers}/>
        <Route exact path="/test" component={ExampleContainer}/>
      </Switch>
    </BrowserRouter>
  }
}

export default Routes;
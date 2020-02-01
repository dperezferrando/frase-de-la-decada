import React from "react";
import Component from "../utils/component";
import { Switch, Router, Route } from 'react-router-dom';
import ExampleContainer from "../containers/example";
import Navbar from "../containers/navbar";
import Footer from "../components/footer";
import Qualifiers from "../containers/qualifiers";
import { createBrowserHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import "./main.css";

const history = qhistory(
  createBrowserHistory(),
  stringify,
  parse
)
const HolaMundo = () => <h1>Hola Mundo</h1>;  

class Routes extends Component {
  render(){
    return <Router history={history}>
      <Navbar/>
      <Switch>
        <Route exact path="/inicio" component={HolaMundo}/>
        <Route exact path="/qualifiers" component={Qualifiers}/>
        <Route exact path="/test" component={ExampleContainer}/>
      </Switch>
      <Footer/>
    </Router>
  }
}

export default Routes;
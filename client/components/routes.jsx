import React, { Suspense } from "react";
import Component from "../utils/component";
import { Switch, Router, Route } from 'react-router-dom';
import Navbar from "../containers/navbar";
import Footer from "../components/footer";
import { createBrowserHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { Container } from "react-bootstrap";
import DefaultPlaceholder from "./utils/defaultPlaceholder"
import "./main.css";

// const Home = React.lazy( () => import("../containers/home"));
// const Qualifiers = React.lazy( () => import("../containers/qualifiers"));
// const GroupStage = React.lazy( () => import("../containers/groupStage"));
// const BracketStage = React.lazy( () => import("../containers/bracketStage"));
// const Profile = React.lazy( () => import("../containers/profile"));

import Home from "../containers/home";
import Qualifiers from "../containers/qualifiers";
import Resultados from "../containers/resultados";
import GroupStage from "../containers/groupStage";
import BracketStage from "../containers/bracketStage";
import Profile from "../containers/profile";


const history = qhistory(
  createBrowserHistory(),
  stringify,
  parse
)

class Routes extends Component {
  state = {
    trolo: false
  }

  Qualifiers = (props) => <Qualifiers
    {...props}
    trolo={this.state.trolo}
    setTroloMode={::this.setTroloMode}
  />

  render(){
    return <Router history={history}>
      <Navbar trolo={this.state.trolo} />
      <Container fluid>
        <Switch>
          <Route exact path="/inicio" component={Home}/>
          <Route exact path="/2020" component={this.Qualifiers} />
          <Route exact path="/resultados" component={Resultados} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer/>
      </Container>
    </Router>
  }
  
  setTroloMode() {
    this.setState({ ...this.state, trolo: true });
    document.body.style.backgroundColor = "rgb(243, 142, 161)";
  }
}

export default Routes;
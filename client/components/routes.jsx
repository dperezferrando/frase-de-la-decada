import React from "react";
import Component from "../utils/component";
import { Switch, Router, Route } from 'react-router-dom';
import ExampleContainer from "../containers/example";
import Navbar from "../containers/navbar";
import Footer from "../components/footer";
import Qualifiers from "../containers/qualifiers";
import GroupStage from "../containers/groupStage";
import { createBrowserHistory } from 'history'
import qhistory from 'qhistory'
import { stringify, parse } from 'qs'
import { Container } from "react-bootstrap";
import "./main.css";

const history = qhistory(
  createBrowserHistory(),
  stringify,
  parse
)
const HolaMundo = () => <h1>Hola Mundo</h1>;  

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
          <Route exact path="/inicio" component={HolaMundo}/>
          <Route exact path="/qualifiers" component={this.Qualifiers} />
          <Route exact path="/groupstage" component={GroupStage} />
          <Route exact path="/test" component={ExampleContainer}/>
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
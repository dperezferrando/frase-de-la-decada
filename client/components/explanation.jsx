import React from 'react';
import Component from "../utils/component"
import { Alert } from "react-bootstrap";
import CountDown from "./countdown";
import config from "../config";

class Explanation extends Component {

  state ={
    showExplanation: true
  }

  render() {
    return <span> { 
      this.state.showExplanation && <Alert variant="light" onClose={::this.hideExplanation} dismissible={this.props.started}>
        {
          this.props.started ? this.props.content() : <this.NotStarted/>
        }
      </Alert>
      }
    </span>
  }


  NotStarted = () => {
    return this.props.phase ? <span className="yearAuthor">
      {this.props.phase} EMPIEZA EN <CountDown date={config[this.props.phase].startDate}/>
    </span> : null;
  }

  hideExplanation() {
    this.setState({...this.state, showExplanation: false })
  }
}

export default Explanation;
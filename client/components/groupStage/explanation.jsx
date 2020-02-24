import React from 'react';
import Component from "../../utils/component"
import { Alert } from "react-bootstrap";

class Explanation extends Component {

  state ={
    showExplanation: true
  }

  render() {
    return <span> { 
      this.state.showExplanation && <Alert variant="light" onClose={::this.hideExplanation} dismissible>
        <b>FASE DE GRUPOS:</b>
        <b><span className="yearAuthor">ESTA FASE TERMINA EN</span></b>
      </Alert>
      }
    </span>
  }

  hideExplanation() {
    this.setState({...this.state, showExplanation: false })
  }
}

export default Explanation;
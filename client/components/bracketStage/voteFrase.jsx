import React from 'react';
import Component from "../../utils/component"
import { Button, Spinner, Row, Col } from "react-bootstrap";
import FraseDetail from "../fraseDetail";
import "./bracketStage.css"

class VoteFrase extends Component {


  state= {
    isLoading: false
  }


  render() {
    return (
      <Col md={6} className="fraseCol">
          <div className="fraseDetailContainer">
            <FraseDetail frase={this.props.frase} />
          </div>
          <div className="voteButton">
          { 
          this.state.isLoading ? 
            <Button variant="success" style={{width: "100%"}}>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Button>
            :
             this.props.shouldVote && <Button style={{width: "100%"}} disabled={this.props.disabled} variant="success" onClick={::this.vote}>Votar</Button> 
        }
          </div>
      </Col>
    );
  }
  vote() {
    this.setState({ ...this.state, isLoading: true })
    this.props.vote([this.props.frase])
  }


}

export default VoteFrase;
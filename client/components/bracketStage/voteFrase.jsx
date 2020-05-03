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
      <Col md={6}>
          <FraseDetail frase={this.props.frase} />
          { 
          this.state.isLoading ? 
            <Button variant="success">
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </Button>
            :
             this.props.shouldVote && <Button disabled={this.props.disabled} variant="success" onClick={::this.vote}>Votar</Button> 
        }
      </Col>
    );
  }
  vote() {
    this.setState({ ...this.state, isLoading: true })
    this.props.vote([this.props.frase])
  }


}

export default VoteFrase;
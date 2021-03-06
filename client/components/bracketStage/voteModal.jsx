import React from 'react';
import Component from "../../utils/component"
import { Modal, Button, Spinner, Row, Col } from "react-bootstrap";
import VoteFrase from "./voteFrase";
import "./bracketStage.css"

class VoteModal extends Component {

  state ={
    voted: false
  }

  render() {
    return (
      <Modal
        onHide={this.props.onHide}
        show={this.props.show}
        dialogClassName="voteModal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           { this.props.shouldVote ? "Elegí tu ganador" : "Detalle del Partido" }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {this.props.frases.map((frase, i) => {
              return <VoteFrase 
                frase={frase}
                key={i}
                vote={::this.vote}
                disabled={this.state.voted}
                shouldVote={this.props.shouldVote}
              />
            })}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide} disabled={this.state.voted}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  vote(frases) {
    this.setState({...this.state, voted: true })
    this.props.vote(frases)
  }


}

export default VoteModal;
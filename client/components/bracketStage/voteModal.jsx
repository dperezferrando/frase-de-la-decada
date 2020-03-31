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
           Elegi tu ganador
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            {this.props.frases.map((frase, i) => {
              return <VoteFrase frase={frase} key={i} vote={::this.vote}/>
            })}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide} disabled={this.state.voted}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  vote() {
    this.setState({...this.state, voted: true })
  }


}

export default VoteModal;
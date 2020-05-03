import React from 'react';
import Component from "../../utils/component"
import { Modal, Button } from "react-bootstrap";
import FraseDetail from "../fraseDetail";
import "./groupStage.css"

class FraseDetailModal extends Component {

  render() {
    return (
      <Modal
        onHide={this.props.onHide}
        show={this.props.show}
        className="fraseDetailModal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <FraseDetail frase={this.props.frase} />  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default FraseDetailModal;
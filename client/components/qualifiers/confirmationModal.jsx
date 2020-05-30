import React from 'react';
import Component from "../../utils/component"
import { Button, Spinner, Modal } from "react-bootstrap";
import "./qualifiers.css"

class ConfirmationModal extends Component {

  state= {
    isLoading: false
  }


  render() {
    return (
      <Modal
        onHide={this.props.onHide}
        show={this.props.show}
        className="troloModal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>¿Confirmás tu selección?</h4>
        </Modal.Body>
        <Modal.Footer>
          { this.state.isLoading ? 
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
             <Button variant="success" onClick={::this.vote}>Sí, enviar voto</Button>
          }
          <Button variant="danger" disabled={this.state.isLoading} onClick={this.props.onHide}>No, bancá</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  vote() {
    this.setState({ ...this.state, isLoading: true });
    this.props.vote();
  }

}

export default ConfirmationModal;
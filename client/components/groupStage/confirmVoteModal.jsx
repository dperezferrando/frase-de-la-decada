import React from 'react';
import Component from "../../utils/component"
import { Modal, Button, Spinner } from "react-bootstrap";
import "./groupStage.css"

class ConfirmVoteModal extends Component {

  state= {
    isLoading: false
  }

  render() {
    return (
      <Modal
        onHide={this.props.onHide}
        show={this.props.show}
        className="confirmVoteModal"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Confirmacion de Voto - Grupo {this.props.group}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.frases.map(({ frase, aclaracion, autor, anio }, i) => {

            return <div key={i}>
               <span className="yearAuthor"> {`${2 - i} voto/s a `}</span>
               <span>{frase}</span>
               <span className="yearAuthor"> {` - ${autor} (${anio})`}</span>
            </div>

          })}

        </Modal.Body>
        <Modal.Footer>
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
              <Button variant="success" onClick={::this.vote}>Votar</Button>
          }
          <Button variant="danger" onClick={this.props.onHide} disabled={this.state.isLoading}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  vote() {
    this.setState({ ...this.state, isLoading: true })
    this.props.vote(this.props.frases)
  }

}

export default ConfirmVoteModal;
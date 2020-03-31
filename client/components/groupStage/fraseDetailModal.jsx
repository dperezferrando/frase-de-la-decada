import React from 'react';
import Component from "../../utils/component"
import { Modal, Button } from "react-bootstrap";
import "./groupStage.css"

class FraseDetailModal extends Component {

  render() {
    const { frase, aclaracion, autor, anio, coeficienteAutista, fraseDelAnio, context } = this.props.frase;
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
          <div className="detailAutor">
            {autor}
          </div>
          <div className="detailFrase">
            {`${frase}` + (aclaracion? ` (${aclaracion})` : "")}
          </div>
          <div className="detailAutor">
            {anio}
          </div>
          <div>
            { fraseDelAnio && <div>Fue elegida como <span className="detailAttribute">Frase del Año</span></div>}
            <span className="detailAttribute">Coeficiente Autista:</span> { coeficienteAutista }
            { context && <div>
            <span className="detailAttribute">Contexto Histórico:</span>
              { context }
            </div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.props.onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

}

export default FraseDetailModal;
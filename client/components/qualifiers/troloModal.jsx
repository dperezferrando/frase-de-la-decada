import React from 'react';
import Component from "../../utils/component"
import { Modal, Button } from "react-bootstrap";
import "./qualifiers.css"

class TroloModal extends Component {

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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           No seas TROLO, man
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Te da paja, la concha de tu madre?</h4>
          <p>
            Elegir la frase de la decada <b>no es joda</b>, pero, dado que seguro sos terrible feto
            tenes la opcion de cargar tu seleccion con un conjunto random
            de las mejores frases de cada año y vas a poder modificarla si te da cancer para que se ajuste a tus (ologifrenicos) gustos.
          </p> 
          <p>
            Sin embargo, si haces eso sos terrible TROLO (confirmado por un grupo de rugbiers)
          </p>
          <p>
            <i>Como vas a ser TROLO? No seas TROLO y listo troesma.</i>
          </p>
          <p>
            <i><b>Nota:</b> si ya elegiste algunas frases, esa seleccion se va a ir en un falcon verde </i>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={::this.becomeTrolo}>Quiero ser TROLO</Button>
          <Button variant="danger" onClick={this.props.onHide}>No soy TROLO</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  becomeTrolo() {
    this.props.setTroloMode();
    this.props.onHide();
  }

}

export default TroloModal;
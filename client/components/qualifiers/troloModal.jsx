import React from 'react';
import Component from "../../utils/component"
import { Modal, Button } from "react-bootstrap";
import "./qualifiers.css"

class TroloModal extends Component {

  render() {
    const man = this.props.user.sex == "M";
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
           Te da paja{man ? ", la concha de tu madre?" : "?"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>No seas TROLO, {  man ? "man" : "woman"}</h4>
          <p>
            Elegir la frase de la década <b>no es joda</b>, pero tenés la opción de cargar tu selección con un conjunto random
            de las mejores frases de cada año. Si te da cancer, vas a poder modificarla para que se ajuste a tus (ologifrenicos) gustos.
          </p> 
          <p>
            También vas a poder apretar de nuevo el botón para obtener distintas selecciones, no prometo que no se repitan porque no me gasté tanto en esta mierda.
          </p>
          <p>
            Sin embargo, si hacés eso sos terrible TROLO
          </p>
          <p>
            <i>¿Cómo vas a ser TROLO? No seas TROLO y listo, {man ? "capo" : "genia"}.</i>
          </p>
          <p>
            <i><b>Nota:</b> si ya elegiste algunas frases, esa selección se va a ir en un falcon verde </i>
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
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
            Elegir la frase de la decada <b>no es joda</b>, pero tenes la opcion de cargar tu seleccion con un conjunto random
            de las mejores frases de cada año. Si te da cancer, vas a poder modificarla para que se ajuste a tus (ologifrenicos) gustos.
          </p> 
          <p>
            Tambien vas a poder apretar de nuevo el boton para obtener distintas selecciones.
            No prometo que no se repitan porque no me gaste tanto en esta mierda.
          </p>
          <p>
            Sin embargo, si haces eso sos terrible TROLO (confirmado por un grupo de rugbiers)
          </p>
          <p>
            <i>Como vas a ser TROLO? No seas TROLO y listo, {man ? "crack" : "genia"}.</i>
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
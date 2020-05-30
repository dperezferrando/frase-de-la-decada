import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import Component from "../../utils/component"
import "./profile.css";

class Profile extends Component {
  render() {
    const { name, active, multiplicator } = this.props.user;
    return <Row className="justify-content-md-center groupStage">
      <Col md={11}>
        <div className="profileContainer">
          <h1>Perfíl</h1>
          <p><span className="atributo">Nombre:</span> <span className="valor">{name}</span></p>
          <p><span className="atributo">Habilitación para Votar:</span> <span className="valor">{active ? "SI" : "NO" }</span></p>
          {active && <p><span className="atributo">Multiplicador:</span> <span className="valor">{ multiplicator } </span></p>}
      
        </div>
      </Col>
    </Row>
  }


}

export default Profile;
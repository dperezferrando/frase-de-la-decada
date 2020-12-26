import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";
import config from "../../config";
import "./resultados.css"


class Resultados extends Component {

   render() {
    return (
        <Row className="justify-content-md-center">
          <Col md={11}>
          <div className="mainResults">
            <div className="mainTitle">RESULTADOS 2020</div>
            <div className="fraseAnio"> 
              <p className="detailAutor">Pérez</p>
              <p className="detailFrase">La concha tuya (Puto)</p>
              <p className="detailAutor">FRASE DEL AÑO</p>

            </div>
          </div>
          </Col>
        </Row>
      
    );
  }

}

export default Resultados;
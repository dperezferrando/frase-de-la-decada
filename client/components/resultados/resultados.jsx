import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";
import config from "../../config";
import QualifiersResults from "../../containers/qualifiers/qualifiersResults";
import "./resultados.css"


class Resultados extends Component {

   render() {
    return (
        <Row className="justify-content-md-center">
          <Col md={11}>
          <div className="mainResults">
            <div className="mainTitle">RESULTADOS 2020</div>
            <div className="fraseAnio"> 
              <p className="detailAutor">{this.props.mostVoted.autor}</p>
              <p className="detailFrase">{this.props.mostVoted.frase} { this.props.mostVoted.aclaracion && `(${this.props.mostVoted.aclaracion})`}</p>
              <p className="detailAutor">FRASE DEL AÑO</p>

            </div>
          <QualifiersResults/>
          </div>
          </Col>
        </Row>
      
    );
  }

}

export default Resultados;
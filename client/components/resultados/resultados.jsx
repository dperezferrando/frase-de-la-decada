import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import WithLoading from "../../components/utils/withLoading";
import config from "../../config";
import QualifiersResults from "../../containers/qualifiers/qualifiersResults";
import "./resultados.css"

const getList = (list, text) => {
  const total = _.sumBy(list, "count");
  return (
    <span>
        <p className="detailAutor">{ text }:</p>
        <p className="detailFrase"> { total }</p>
        { 
          list.map(({ _id, count }) => {
            return <p><span className="detailAutor">{ _id }</span> - <span className="detailFrase">{ `${count} (${(count/total*100).toFixed(2)}%)` }</span></p>
          })
        }
      </span>

    )
}

class Resultados extends Component {

   render() {
    return (
        <Row className="justify-content-md-center">
          <Col md={11}>
            <div className="mainResults">
              <Row>
                <Col md={12}>
                  <div className="mainTitle">RESULTADOS 2020</div>
                  <div className="fraseAnio"> 
                    <p className="detailAutor">{this.props.mostVoted.autor}</p>
                    <p className="detailFrase">{this.props.mostVoted.frase} { this.props.mostVoted.aclaracion && `(${this.props.mostVoted.aclaracion})`}</p>
                    <p className="detailAutor">FRASE DEL AÑO</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <Row>
                    <Col md={6}>
                      {getList(this.props.stats.frasesCount, "CANTIDAD TOTAL DE FRASES")}
                    </Col>
                    <Col md={6}>
                      {getList(_.filter(this.props.stats.votesCount, ({ count }) => count > 0), "CANTIDAD TOTAL DE VOTOS")}
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <QualifiersResults/>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      
    );
  }

}

export default Resultados;
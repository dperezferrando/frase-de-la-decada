import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import Explanation from "../explanation";
import BracketPhase from "../../containers/bracketStage/bracketPhase";
import config from "../../config";
import "./bracketStage.css"

const explanationContent = () => {
  return <span>
    <b>ELIMINACION DIRECTA:</b> En esta fase las frases se enfrentan en partidos 1v1 yendo desde 
    octavos de final hasta la final. Para votar en un partido solamente hay que hacer click
    en el boton "Votar" correspondiente. En caso de empate, el coeficiente autista define el ganador.<br/>
    Los partidos de cada fase se definen por sorteo.
    
  </span>
}

const bracketPhases = ["final", "thirdPlace", "semi", "fourths", "eights"];

class BracketStage extends Component {

  render() {
    const started = (phase) => moment().isAfter(config[phase].startDate);
    const showResults = (phase) => moment().isAfter(config[phase].resultsDate);
    return <span>
      <Row className="justify-content-md-center bracketStage">
        <Col md={11}>
          <Explanation started={started("eights")} phase="eights" content={explanationContent}/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={11}>
      { !this.props.user.active && <span>Tu usuario <b>NO</b> está <b>ACTIVO</b>. No podés votar.</span> }
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={11}>
          {bracketPhases.filter(started).map((it, i) =>
            <BracketPhase 
              phase={it}
              key={i}
              matches={this.props.matches}
              votes={this.props.votes}
            />
          )}
        </Col>
      </Row>
    </span>
  }



}

export default BracketStage
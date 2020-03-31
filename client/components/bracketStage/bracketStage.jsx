import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import Explanation from "../explanation";
import BracketPhase from "./bracketPhase";
import config from "../../config";

const explanationContent = () => {
  return <span>
    <b>LLAVE:</b> 
    
  </span>
}

const bracketPhases = ["eightsStage", "fourthsStage", "semiStage", "finalStage"];

class BracketStage extends Component {

  render() {
    const started = (phase) => moment().isAfter(config[phase].startDate);
    const showResults = (phase) => moment().isAfter(config[phase].resultsDate);
    return <span>
      <Row className="justify-content-md-center">
        <Col md={11}>
          <Explanation started={started("eightsStage")} content={explanationContent}/>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md={11}>
          {bracketPhases.filter(started).map((it, i) =>
            <BracketPhase phase={it} key={i} />
          )}
        </Col>
      </Row>
    </span>
  }



}

export default BracketStage
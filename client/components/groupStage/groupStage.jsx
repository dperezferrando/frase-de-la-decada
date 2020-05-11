import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import Explanation from "../explanation";
import Group from "./group";
import config from "../../config";
import "./groupStage.css"
import CountDown from "../countdown";

const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"]

const explanationContent = () => {
  return <span>
    <b>FASE DE GRUPOS:</b> De cada grupo clasifican los dos primeros,
    solamente tenes que arrastrar las dos frases que mas te gusten a las primeras dos posiciones y luego apretar "Votar".
    La primer posicion recibe <b>2 votos</b>, la segunda <b>1 voto</b>. Podes hacer click en una frase para obtener mas informacion sobre la misma.
    <b> Good luck, have fun. </b>
    <b><span className="yearAuthor">ESTA FASE TERMINA EN <CountDown date={config.groupStage.endDate}/></span></b>
  </span>
}

class GroupStage extends Component {

  render() {
    const started = moment().isAfter(config.groupStage.startDate);
    const showResults = moment().isAfter(config.groupStage.resultsDate);
    return <span>
      <Row className="justify-content-md-center groupStage">
        <Col md={11}>
          <Explanation started={started} content={explanationContent} phase="groupStage"/>
        </Col>
      </Row>
        { showResults && this.Groups(started, showResults) }
        {this.Groups(started, false)}
    </span>
  }


  Groups = (started, showResults) => 
    started && <Row className="justify-content-md-center">
        <div className="groups"> 
          <Col md={12}>
            <Row>
              <h3>{ showResults ? "Resultados" : "Tus Votos"  }</h3>
              <br />
            </Row>
            <Row>
              { !showResults && !this.props.user.active && <span>Tu usuario <b>NO</b> esta <b>ACTIVO</b>. No podes votar.</span> }
            </Row>
          </Col>
            <Col md={12}>
              <Row>
              {this.props.groups.map((it, i) => <Group
                key={i}
                name={GROUPS[i]}
                frases={it}
                shouldVote={this.shouldVote(GROUPS[i])}
                vote={::this.vote}
                votes={this.getVotes(GROUPS[i])}
                showResults={showResults}
              />
            )}
            </Row>
          </Col>
        </div>
      </Row>

  vote(group, frases) {
    this.props.actions.vote("groupStage", group, frases);   
  }

  shouldVote(group) {
    const { voted: { groupStage }, active } = this.props.user;
    return active && !_.includes(groupStage, group) && moment().isBefore(config.groupStage.endDate);
  }

  getVotes(group) {
    const votes = _.find(this.props.votes, { group });
    return _.get(votes, "frases", []);
  }

}

export default GroupStage
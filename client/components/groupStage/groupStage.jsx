import React from 'react';
import { Container, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import Component from "../../utils/component"
import Explanation from "../explanation";
import Group from "./group";
import config from "../../config";
import "./groupStage.css"
import CountDown from "../countdown";

const GROUPS = ["A", "B", "C", "D", "E", "F", "G", "H"]

const explanationContent = (multiplicator) => {
  return <span>
    <b>FASE DE GRUPOS:</b> De cada grupo clasifican los dos primeros,
    solamente tenés que arrastrar las dos frases que más te gusten a las primeras dos posiciones y luego apretar "Votar".
    La primer posición recibe <b>{2 * multiplicator} punto/s</b>, la segunda <b>{multiplicator} punto/s</b>. Podés hacer click en una frase para obtener más información sobre la misma.
    <b> Good luck, have fun. </b>
    <b><span className="yearAuthor">ESTA FASE TERMINA EN <CountDown date={config.groupStage.endDate}/></span></b>
  </span>
}

const showResults = moment().isAfter(config.groupStage.resultsDate);

class GroupStage extends Component {

  state = { 
    showResults
  }

  render() {
    const started = moment().isAfter(config.groupStage.startDate);
    return <span>
      <Row className="justify-content-md-center groupStage">
        <Col md={11}>
          <Explanation started={started} content={() => explanationContent(this.props.user.multiplicator)} phase="groupStage"/>
        </Col>
      </Row>
        {this.Groups(started)}
    </span>
  }


  Groups = (started) => 
    started && <Row className="justify-content-md-center">  
        <Col md={11}>
          <Row className="justify-content-md-center groups">
            <Col md={12}>
              <Row>
                <h3>{ this.state.showResults ? "Resultados" : "Tus Votos"  }</h3>
                {
                  showResults && <div className="switchGroup"><Form.Check 
                    type="switch"
                    id={`switch-groups`}
                    label="Ver mis votos"
                    checked={!this.state.showResults}
                    onChange={() => this.setState({...this.state, showResults: !this.state.showResults})}
                    inline
                  /></div>}
                <br />
                { !showResults && !this.props.user.active && <span>Tu usuario <b>NO</b> está <b>ACTIVO</b>. No podés votar.</span> }
              </Row>
            </Col>
            <Col md={12}>
              <Row className="justify-content-md-center">
                {this.props.groups.map((it, i) => <Group
                  key={i}
                  name={GROUPS[i]}
                  frases={it}
                  shouldVote={this.shouldVote(GROUPS[i])}
                  vote={::this.vote}
                  votes={this.getVotes(GROUPS[i])}
                  showResults={ this.state.showResults}
                  user={this.props.user}
                />
                )}
              </Row>
            </Col>
          </Row>
        </Col>
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
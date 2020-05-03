import React from 'react';
import Component from "../../utils/component"
import CountDown from "../countdown";
import config from "../../config";
import Match from "./match";
import moment from "moment";
import { Form, Collapse } from "react-bootstrap";
import "./bracketStage.css"

const phaseTranslator = {
  "eights": "Octavos de Final", 
  "fourths": "Cuartos de Final",
  "semi": "Semifinal",
  "final": "Final"
}

class BracketPhase extends Component {

  state = {
    showResults: moment().isAfter(config[this.props.phase].resultsDate),
    collapse: false
  }


  render() {
    const finished = moment().isAfter(config[this.props.phase].endDate);
    const matchesVoted = this.props.user.voted[this.props.phase];
    const chevron = this.state.collapse ? "right" : "down";
    return <div className="bracketPhase">
      <div className="chevron" onClick={::this.collapse} aria-controls="matchContainer" aria-expanded={!this.state.collapse}>
        <i className={`fa fa-chevron-${chevron}`} aria-hidden='true'/>
      </div>
      <span className="phaseTitle">{phaseTranslator[this.props.phase]}</span>
      <span> - Termina en <CountDown date={config[this.props.phase].endDate}/></span>
      {!this.state.collapse && finished && <Form.Check 
        type="switch"
        id={`switch-${this.props.phase}`}
        label="Ver mis votos"
        checked={!this.state.showResults}
        onChange={() => this.setState({...this.state, showResults: !this.state.showResults})}
        inline
      />}
      <Collapse in={!this.state.collapse}>
        <div className="matchContainer">
          {
            this.matches().map((match, i) => <Match 
              key={i}
              phase={this.props.phase}
              match={match}
              finished={finished}
              showResults={this.state.showResults}
              vote={this.props.vote}
              matchesVoted={matchesVoted}
              votedFrase={this.getMatchVote(match)}
            />)
          }
        </div>
      </Collapse>
    </div>
  }

  getMatchVote(match) {
    return _(this.props.votes)
    .filter({match: match._id})
    .map("frases")
    .flatten()
    .first()
  }

  matches() {
    return _.filter(this.props.matches, { phase: this.props.phase });
  }

  collapse() {
    this.setState({ ...this.state,  collapse: !this.state.collapse })
  }


}

export default BracketPhase;
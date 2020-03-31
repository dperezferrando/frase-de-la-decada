import React from 'react';
import Component from "../../utils/component"
import CountDown from "../countdown";
import config from "../../config";
import Match from "./match";
import moment from "moment";
import "./bracketStage.css"

const phaseTranslator = {
  "eights": "Octavos de Final", 
  "fourths": "Cuartos de Final",
  "semi": "Semifinal",
  "final": "Final"
}

class BracketPhase extends Component {


  render() {
    const finished = moment().isAfter(config[this.props.phase].endDate);
    const showResults = moment().isAfter(config[this.props.phase].resultsDate);
    const matchesVoted = this.props.user.voted[this.props.phase];
    return <div className="bracketPhase">
      <span className="phaseTitle">{phaseTranslator[this.props.phase]}</span><span> - Termina en <CountDown date={config[this.props.phase].endDate}/></span>
      <div className="matchContainer">
        {
          this.props.matches.map((match, i) => <Match 
            key={i}
            phase={this.props.phase}
            match={match}
            finished={finished}
            showResults={showResults}
            vote={this.props.vote}
            matchesVoted={matchesVoted}
          />)
        }
      </div>
    </div>
  }

}

export default BracketPhase;
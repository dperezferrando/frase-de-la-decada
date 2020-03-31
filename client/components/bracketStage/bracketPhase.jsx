import React from 'react';
import Component from "../../utils/component"
import CountDown from "../countdown";
import config from "../../config";
import Match from "./match";
import "./bracketStage.css"

const phaseTranslator = {
  "eights": "Octavos de Final", 
  "fourths": "Cuartos de Final",
  "semi": "Semifinal",
  "final": "Final"
}

class BracketPhase extends Component {


  render() {
    return <div className="bracketPhase">
      <span className="phaseTitle">{phaseTranslator[this.props.phase]}</span><span> - Termina en <CountDown date={config.groupStage.endDate}/></span>
      <div className="matchContainer">
        {
          this.props.matches.map((match, i) => <Match key={i} phase={this.props.phase} match={match}/>)
        }
      </div>
    </div>
  }

}

export default BracketPhase;
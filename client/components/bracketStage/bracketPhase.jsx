import React from 'react';
import Component from "../../utils/component"
import CountDown from "../countdown";
import config from "../../config";
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
      {
        this.props.matches.map(({ fraseA, fraseB }, i) => <div key={i}>{`${fraseA.autor} vs ${fraseB.autor}`}</div>)
      }
    </div>
  }

}

export default BracketPhase;
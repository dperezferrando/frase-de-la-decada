import React from 'react';
import Component from "../../utils/component"
import CountDown from "../countdown";
import config from "../../config";


class BracketPhase extends Component {


  render() {
    return <b><span className="yearAuthor">{ this.props.phase}TERMINA EN <CountDown date={config.groupStage.endDate}/></span></b>
  }

}

export default BracketPhase;
import _ from "lodash";
import PhaseVoter from "./phaseVoter";

class BracketVoter extends PhaseVoter {

  constructor(user, phase) {
    super(user)
    this.phase = phase;
  }

  _theSelectionIsValid_(frases) {
    return frases.length == 1;
  }

  __votedValue__({ match }) {
    return { $push: { [`voted.${this.phase}`]: match } }
  }


}

export default BracketVoter;
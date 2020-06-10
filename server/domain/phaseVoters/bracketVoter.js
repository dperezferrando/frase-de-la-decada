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

  _didntVote_({ match }) {
    return !_(this.user.voted[this.phase]).map(it => it.toString()).includes(match);
  }

}

export default BracketVoter;
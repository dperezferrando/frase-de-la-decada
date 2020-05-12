import _ from "lodash";
import PhaseVoter from "./phaseVoter";

class GroupStageVoter extends PhaseVoter {

  constructor(user) {
    super(user)
    this.phase = "groupStage";
  }

  _theSelectionIsValid_(frases) {
    return frases.length == 2;
  }

  __saveVote__(ids) {
    return this._persist(_.first(ids), 2)
      .then(() => this._persist(_.last(ids), 1));
  }

  __votedValue__({ group }) {
    return { $push: { [`voted.${this.phase}`]: group } }
  }

  _didntVote_({ group }) {
    return !_.includes(this.user.voted[this.phase], group);
  }


}

export default GroupStageVoter;
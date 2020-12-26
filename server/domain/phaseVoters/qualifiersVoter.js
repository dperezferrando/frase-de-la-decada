import _ from "lodash";
import PhaseVoter from "./phaseVoter";
import Promise from "bluebird";
const MIN_FRASE_YEAR = 2;
const MAX_FRASE_AUTOR = 10;

class QualifiersVoter extends PhaseVoter {

  constructor(user) {
    super(user)
    this.phase = "qualifiers";
  }

  _theSelectionIsValid_(frases) {

    return frases.length == 8;
  }

  __saveVote__(ids) {
    return Promise.map(ids, (id, i) => this._persist(id, 8 - i))
  }



}

export default QualifiersVoter;
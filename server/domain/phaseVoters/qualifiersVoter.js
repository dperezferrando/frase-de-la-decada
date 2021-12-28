import _ from "lodash";
import PhaseVoter from "./phaseVoter";
import Promise from "bluebird";
const MIN_FRASE_YEAR = 2;
const MAX_FRASE_AUTOR = 10;
const CANT_FRASES = 7

class QualifiersVoter extends PhaseVoter {

  constructor(user) {
    super(user)
    this.phase = "qualifiers";
  }

  _theSelectionIsValid_(frases) {

    return frases.length == CANT_FRASES;
  }

  __saveVote__(ids) {
    return Promise.map(ids, (id, i) => this._persist(id, CANT_FRASES - i))
  }



}

export default QualifiersVoter;
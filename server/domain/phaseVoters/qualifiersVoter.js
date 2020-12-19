import _ from "lodash";
import PhaseVoter from "./phaseVoter";
const MIN_FRASE_YEAR = 2;
const MAX_FRASE_AUTOR = 10;

class QualifiersVoter extends PhaseVoter {

  constructor(user) {
    super(user)
    this.phase = "qualifiers";
  }

  _theSelectionIsValid_(frases) {

    return frases.length == 7;
  }

}

export default QualifiersVoter;
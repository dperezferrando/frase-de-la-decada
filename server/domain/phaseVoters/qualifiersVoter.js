import _ from "lodash";
import PhaseVoter from "./phaseVoter";
const MIN_FRASE_YEAR = 3;
const MAX_FRASE_AUTOR = 10;

class QualifiersVoter extends PhaseVoter {

  constructor(user) {
    super(user)
    this.phase = "qualifiers";
  }

  _theSelectionIsValid_(frases) {
    const validByYear = _(frases)
      .countBy("anio")
      .every(it => it >= MIN_FRASE_YEAR);
    const validByAuthor = _(frases)
      .countBy("autor")
      .every(it => it <= MAX_FRASE_AUTOR);
    return validByYear && validByAuthor && frases.length == 32;
  }

}

export default QualifiersVoter;
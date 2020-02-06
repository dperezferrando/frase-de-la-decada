import config from "../../config";
import moment from "moment";

class VoteValidator {

  validate(frases) {
    return this._phaseIsActive() && this._theSelectionIsValid_(frases);
  }

  _phaseIsActive() {
    return moment().isBefore(config[this.phase].endDate);
  }


  _theSelectionIsValid_() {
    throw new Error("not implemented");
  }

}

export default VoteValidator;
import config from "../../config";
import moment from "moment";
import FraseHome from "../homes/frase.home.js";
import InvalidVote from "../exceptions/invalidVote";

class PhaseVoter {

  constructor() {
    this.fraseHome = new FraseHome();
  }

  validate(frases) {
    return this._phaseIsActive() && this._theSelectionIsValid_(frases);
  }


  vote(ids) {
    return this.fraseHome.getAll({ _id: { $in: ids }}, 0, 32)
      .then(selection => this.validateSelection(selection))
      .then(() => this.__saveVote__(ids));
    ;
  }

  validateSelection(selection) {
    if(!this.validate(selection))
      return Promise.reject(new InvalidVote())
  }

  __saveVote__(ids) {
    return this._persist(ids, 1);
  }

  _persist(ids, quantity) {
    return this.fraseHome.update({ _id: { $in: ids }}, { $inc: { [`votesQuantity.${this.phase}`]: quantity } }, { multi: true });
  }

  _phaseIsActive() {
    return moment().isBefore(config[this.phase].endDate);
  }


  _theSelectionIsValid_() {
    throw new Error("not implemented");
  }

}

export default PhaseVoter;
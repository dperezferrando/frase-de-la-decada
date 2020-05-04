import config from "../../config";
import moment from "moment";
import FraseHome from "../homes/frase.home.js";
import InvalidVote from "../exceptions/invalidVote";
import VotesService from "../services/vote.service.js";
import UserService from "../services/user.service.js";

class PhaseVoter {

  constructor(user) {
    this.user = user;
    this.fraseHome = new FraseHome();
    this.votesService = new VotesService(user);
    this.userService = new UserService();
  }

  validate(frases) {
    return this._phaseIsActive() && this._allowedToVote && this._theSelectionIsValid_(frases);
  }


  vote(ids, other) {
    return this.fraseHome.getAll({ _id: { $in: ids }}, 0, 32)
      .then(selection => this.validateSelection(selection))
      .then(() => this.__saveVote__(ids))
      .then(() => this.votesService.createVotes({ phase: this.phase, ids, ...other }))
      .then(() => this.userService.vote(this.user, this.__votedValue__(other)));
  }

  validateSelection(selection) {
    if(!this.validate(selection))
      return Promise.reject(new InvalidVote())
  }

  __saveVote__(ids) {
    return this._persist(ids, 1);
  }

  __votedValue__(other) {
    return { [`voted.${this.phase}`]: true }
  }

  _persist(ids, quantity) {
    return this.fraseHome.update({ _id: { $in: ids }}, { $inc: { [`votesQuantity.${this.phase}`]: quantity } }, { multi: true });
  }

  _phaseIsActive() {
    return moment().isBefore(config[this.phase].endDate);
  }

  _allowedToVote() {
    return this.user.active;
  }


  _theSelectionIsValid_() {
    throw new Error("not implemented");
  }

}

export default PhaseVoter;
import Home from "./home";
import _ from "lodash";
import moment from "moment"
import Promise from "bluebird";
import config from "../../config";
import FraseModel from "../schemas/frase.model.js"

class FraseHome extends Home {
  constructor() {
    super(FraseModel);
  }

  mostVoted() {
    if(!moment().isAfter(config.qualifiers.resultsDate))
      return Promise.resolve([])
    return this.Model.find({}).sort({ "votesQuantity.qualifiers": -1 }).limit(1).execAsync();
  }

  stats() {
    if(!moment().isAfter(config.qualifiers.resultsDate))
      return Promise.resolve({
      frasesCount: [],
      votesCount: [],
      mostVoted: []
    })
    return Promise.props({
      frasesCount: this._frasesCount(),
      votesCount: this._votesCount(),
      mostVoted: this._mostVotedByAuthor()
    })
  }

  destacadas() {
    return this.getAll({ destacada: true});
  }

  _frasesCount() {
    return this.aggregate([{ $group: { _id: "$autor", count: { $sum: 1} }}, {$sort: {count: -1}}]);
  }

  _votesCount() {
    return this.aggregate([{ $group: { _id: "$autor", count: { $sum: "$votesQuantity.qualifiers"} }}, {$sort: {count: -1}}]);
  }
  _mostVotedByAuthor() {
    return this.aggregate([{$sort: {"votesQuantity.qualifiers": -1}}, { $group: { _id: "$autor", frase: {$first: "$frase" }, aclaracion: {$first: "$aclaracion" }, votos: { $first: "$votesQuantity.qualifiers"} } }])
  }

}

export default FraseHome;



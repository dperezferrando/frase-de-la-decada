import Home from "./home";
import MatchModel from "../schemas/match.model.js"
import mongoose from "mongoose";
import moment from "moment";
import _ from "lodash";
import config from "../../config";
const { ObjectId } = mongoose.Types;

class MatchHome extends Home {
  constructor() {
    super(MatchModel);
  }

  getAll(query) {
    return this.Model.find(query)
      .populate("fraseA", this._getVotesProjection())
      .populate("fraseB", this._getVotesProjection())
      .execAsync()
  }

  _getVotesProjection() {
    const phases = ["groupStage", "eights", "fourths", "semi", "thirdPlace", "final"];
    const projs = phases.map(phase => {
      if(moment().isBefore(config[phase].resultsDate))
        return ` -votesQuantity.${phase}`;
      else
        return ""
    })

  return _(projs).reject(_.isEmpty).reduce((a, b) => a.concat(b), "");
  }



}

export default MatchHome;



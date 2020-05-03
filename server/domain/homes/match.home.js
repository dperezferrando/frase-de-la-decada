import Home from "./home";
import MatchModel from "../schemas/match.model.js"
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

class MatchHome extends Home {
  constructor() {
    super(MatchModel);
  }

  getAll(query) {
    return this.Model.find(query)
      .populate("fraseA")
      .populate("fraseB")
      .execAsync()
  }


}

export default MatchHome;



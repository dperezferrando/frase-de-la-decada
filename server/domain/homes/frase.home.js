import Home from "./home";
import FraseModel from "../schemas/frase.model.js"
import mongoose from "mongoose";

mongoose.set("debug", true)

class FraseHome extends Home {
  constructor() {
    super(FraseModel);
  }

  vote(phase, ids) {
    return this.update({ _id: { $in: ids }}, { $inc: { [`votesQuantity.${phase}`]: 1 } }, { multi: true });
  }
}

export default FraseHome;



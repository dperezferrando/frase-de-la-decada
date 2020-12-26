import Home from "./home";
import FraseModel from "../schemas/frase.model.js"

class FraseHome extends Home {
  constructor() {
    super(FraseModel);
  }

  mostVoted() {
    return this.Model.find({}).sort({ "votesQuantity.qualifiers": -1 }).limit(1).execAsync();
  }

}

export default FraseHome;



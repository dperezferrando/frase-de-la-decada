import Home from "./home";
import FraseModel from "../schemas/frase.model.js"

class FraseHome extends Home {
  constructor() {
    super(FraseModel);
  }

}

export default FraseHome;



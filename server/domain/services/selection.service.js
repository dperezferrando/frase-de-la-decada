import SelectionHome from "../homes/selection.home.js";
import _ from "lodash";

class SelectionService {
  constructor(user) {
    this.home = new SelectionHome();
  }

  random() {
    return this.home.random()
      .get(0);
  }

}

export default SelectionService;
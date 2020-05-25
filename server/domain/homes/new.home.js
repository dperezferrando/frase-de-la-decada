import Home from "./home";
import NewModel from "../schemas/new.model.js"

class NewHome extends Home {
  constructor() {
    super(NewModel);
  }
}

export default NewHome;



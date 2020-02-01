import Home from "./home";
import VoteModel from "../schemas/vote.model.js"

class VoteHome extends Home {
  constructor(user) {
    super(VoteModel);
    this.user = user;
  }
}

export default VoteHome;



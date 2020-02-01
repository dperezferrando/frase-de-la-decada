import VoteHome from "../homes/vote.home.js";
import _ from "lodash";

class VoteService {
  constructor(user) {
    this.home = new VoteHome(user);
  }

}

export default VoteService;
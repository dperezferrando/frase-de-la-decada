import MatchHome from "../homes/match.home.js";
import _ from "lodash";

class VoteService {
  constructor() {
    this.home = new MatchHome();
  }

  matches(phase) {
    return this.home.getAll({ phase });
  }

}

export default VoteService;
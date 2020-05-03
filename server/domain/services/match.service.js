import MatchHome from "../homes/match.home.js";
import _ from "lodash";

class VoteService {
  constructor() {
    this.home = new MatchHome();
  }

  matches() {
    return this.home.getAll({});
  }

}

export default VoteService;
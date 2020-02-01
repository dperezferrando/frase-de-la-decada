import VoteHome from "../homes/vote.home.js";


class VoteService {
  constructor(user) {
    this.home = new VoteHome(user);
  }

  qualificationVote() {
  }

}

export default VoteService;
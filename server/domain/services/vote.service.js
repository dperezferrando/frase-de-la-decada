import VoteHome from "../homes/vote.home.js";
import _ from "lodash";

class VoteService {
  constructor(user) {
    this.home = new VoteHome(user);
  }

  createVotes(phase, ids) {
    const date = new Date();
   return this.home.create({
    date,
    phase,
    frases: ids.map(frase => ({ frase }))
   });

  }

  votes(phase) {
    return this.home.getAll({ phase });
  }

}

export default VoteService;
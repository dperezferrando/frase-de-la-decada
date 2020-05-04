import VoteHome from "../homes/vote.home.js";
import _ from "lodash";

class VoteService {
  constructor(user) {
    this.home = new VoteHome(user);
  }

  createVotes({ phase, ids, ...other }) {
    const date = new Date();
   return this.home.create({
    date,
    phase,
    frases: ids.map(frase => ({ frase })),
    ...other
   });

  }

  votes(phase) {
    const query = phase != "bracketStage" ? { phase } : { phase: { $in: ["eights", "fourths", "semi", "final", "thirdPlace"] }}; 
    return this.home.getAll(query);
  }

}

export default VoteService;
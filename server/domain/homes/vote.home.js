import Home from "./home";
import VoteModel from "../schemas/vote.model.js"
import mongoose from "mongoose";

class VoteHome extends Home {
  constructor(user) {
    super(VoteModel);
    this.user = user;
  }

  create(entity) {
    const { ObjectId } = mongoose.Types;
    const frases = entity.frases.map(({ frase }) => ({ frase: new ObjectId(frase) }));
    const vote = { ...entity, frases, user: new ObjectId(this.user._id) };
    return super.create(vote);
  }
}

export default VoteHome;



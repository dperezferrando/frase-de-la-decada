import Home from "./home";
import VoteModel from "../schemas/vote.model.js"
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

class VoteHome extends Home {
  constructor(user) {
    super(VoteModel);
    this.user = user;
  }

  create(entity) {
    const frases = entity.frases.map(({ frase }) => ({ frase: new ObjectId(frase) }));
    const vote = { ...entity, frases};
    return super.create(vote);
  }

  getAll(query) {
    return this.Model.find({ ...query, ...this.__query__() })
      .populate("frases.frase")
      .execAsync()
    }
 
  __query__() {
    return { user: new ObjectId(this.user._id) };
  }
}

export default VoteHome;



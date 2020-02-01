import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  user:  Schema.ObjectId,
  date: Date,
  phase: String,
  match: Schema.ObjectId,
  frases: [{
    frase: {
      type: Schema.ObjectId,
      ref: "Frase"
    },
    order: Number,
  }]
});

module.exports = mongoose.model('Vote', voteSchema);
import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const voteSchema = new Schema({
  user:  Schema.ObjectId,
  date: Date,
  phase: String,
  match: Schema.ObjectId,
  group: String,
  frases: [{
    _id: false,
    frase: {
      type: Schema.ObjectId,
      ref: "Frase"
    },
    order: Number,
  }]
});

module.exports = mongoose.model('Vote', voteSchema);
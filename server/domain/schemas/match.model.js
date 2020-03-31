import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const matchSchema = new Schema({
  phase: String,
  fraseA: {
    type: Schema.ObjectId,
    ref: "Frase"
  },
  fraseB: {
    type: Schema.ObjectId,
    ref: "Frase"
  }
});

module.exports = mongoose.model('Match', matchSchema);
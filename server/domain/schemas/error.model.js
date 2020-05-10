import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const errorSchema = new Schema({
  name: String,
  messag: String,
  stack: String,
  user: String,
  frases: [Schema.ObjectId],
  phase: String
});

module.exports = mongoose.model('Error', errorSchema);
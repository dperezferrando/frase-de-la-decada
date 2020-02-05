import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const selectionSchema = new Schema({
  frases: [Schema.ObjectId]
});

module.exports = mongoose.model('Selection', selectionSchema);
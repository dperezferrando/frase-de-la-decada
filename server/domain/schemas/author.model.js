import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
});

module.exports = mongoose.model('User', authorSchema);
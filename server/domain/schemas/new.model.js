import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const newSchema = new Schema({
  title: String,
  date: Date,
  body: String,
  img: String,
  video: String,
  hidden: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('New', newSchema);
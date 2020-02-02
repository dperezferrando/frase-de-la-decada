import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:  String,
  googleId: String,
  name:   String,
  voted: {
    qualifiers: {
      type: Boolean,
      default: false,
    },
    group: {
      type: Boolean,
      default: false,
    },
    eights: {
      type: Boolean,
      default: false,
    },
    fourths: {
      type: Boolean,
      default: false,
    },
    semi: {
      type: Boolean,
      default: false,
    },
    final: {
      type: Boolean,
      default: false,
    },
  }
});

module.exports = mongoose.model('User', userSchema);
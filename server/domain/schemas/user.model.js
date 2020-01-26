import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:  String,
  googleId: String,
  name:   String,
});

module.exports = mongoose.model('User', userSchema);
import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:  String,
  googleId: String,
  name:   String,
  sex: {
    type: String,
    default: "M"
  },
  active: {
    type: Boolean,
    default: false
  },
  multiplicator: {
    type: Number,
    default: 1
  },
  voted: {
    qualifiers: {
      type: Boolean,
      default: false,
    },
    groupStage: {
      type: [String],
      default: [],
    },
    eights: {
      type: [Schema.ObjectId],
      default: [],
    },
    fourths: {
      type: [Schema.ObjectId],
      default: [],
    },
    semi: {
      type: [Schema.ObjectId],
      default: [],
    },
    thirdPlace: {
      type: [Schema.ObjectId],
      default: [],
    },
    final: {
      type: [Schema.ObjectId],
      default: [],
    },
  }
});

module.exports = mongoose.model('User', userSchema);
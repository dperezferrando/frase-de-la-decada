import mongoose from "mongoose";
import Promise from "bluebird";

Promise.promisifyAll(mongoose)
const Schema = mongoose.Schema;

const fraseSchema = new Schema({
  frase: String,
  anio: String,
  autor: String,
  aclaracion: String,
  coeficienteAutista: Number,
  preSelected: Boolean,
  context: String,
  destacada: Boolean,
  fraseDelAnio: {
    type: Boolean,
    default: false
  },
  group: String,
  votesQuantity: {
    qualifiers: {
      type: Number,
      default: 0
    },
    groupStage: {
      type: Number,
      default: 0
    },
    eights: {
      type: Number,
      default: 0
    },
    fourths: {
      type: Number,
      default: 0
    },
    semi: {
      type: Number,
      default: 0
    },
    thirdPlace: {
      type: Number,
      default: 0
    },    
    final: {
      type: Number,
      default: 0
    }
  },
  qualified: Boolean
});

module.exports = mongoose.model('Frase', fraseSchema);
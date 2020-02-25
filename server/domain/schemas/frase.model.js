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
  fraseDelAnio: {
    type: Boolean,
    default: false
  },
  group: String,
  votesQuantity: {
    qualifiers: Number,
    groupStage: Number,
    eights: Number,
    fourths: Number,
    semi: Number,
    final: Number,
  },
  qualified: Boolean
});

module.exports = mongoose.model('Frase', fraseSchema);
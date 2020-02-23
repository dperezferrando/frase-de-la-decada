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
  fraseDelAnio: {
    type: Boolean,
    default: false
  },
  group: String,
  votesQuantity: {
    qualifiers: Number,
    group: Number,
    eights: Number,
    fourths: Number,
    semi: Number,
    final: Number,
  },
  qualified: Boolean
});

module.exports = mongoose.model('Frase', fraseSchema);
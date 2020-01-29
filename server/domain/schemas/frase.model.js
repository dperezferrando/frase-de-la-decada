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
  fraseDelAnio: Boolean
});

module.exports = mongoose.model('Frase', fraseSchema);
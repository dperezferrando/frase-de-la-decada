import FraseHome from "./domain/homes/frase.home.js";
import mongoose from "mongoose";

const config = require("./config")
console.log(config.mongo.uri)
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");
const fraseHome = new FraseHome();

fraseHome.aggregate([
  { $match: {} },
  { $sort: {"votesQuantity.qualifiers": -1 , "coeficienteAutista": -1, "anio": -1 }},  
  { $limit: 32 }
])
.map(({_id}) => _id)
.then(ids => fraseHome.update({_id: { $in: ids } }, { qualified: true }, { multi: true }))
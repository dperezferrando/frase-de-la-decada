import FraseHome from "./domain/homes/frase.home.js";
import mongoose from "mongoose";
import _ from "lodash";

const config = require("./config")
console.log(config.mongo.uri)
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");
const fraseHome = new FraseHome();

const addToGroup = (groups, bombo, i) => {
  const shuffled = _.shuffle(bombo);
  const fraseToAdd = shuffled.pop();
  _.minBy(groups, "length").push(fraseToAdd);
  return shuffled;

}

const fillGroups = (groups, bombos) => {
  if(_.every(bombos, _.isEmpty))
    return;
  const newBombos = _.map(bombos,  (bombo, i) => addToGroup(groups, bombo, i))
  fillGroups(groups, newBombos)
}

const createBombos = (qualified) => _.chunk(qualified, 8);

const makeDraw = bombos => {
  const first = _.first(bombos);
  const groups = first.map(it => [it]);
  fillGroups(groups, _.drop(bombos, 1));
  return groups;

}




fraseHome.aggregate([
  { $match: { qualified: true } },
  { $sort: {"votesQuantity.qualifiers": -1 , "coeficienteAutista": -1, "anio": -1 }},  
  { $limit: 32 }
])
.then(qualified => createBombos(qualified))
.then(bombos => makeDraw(bombos))
.tap(groups => console.log(JSON.stringify(groups)))




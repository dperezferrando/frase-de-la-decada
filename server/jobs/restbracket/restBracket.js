import FraseHome from "./domain/homes/frase.home.js";
import MatchHome from "./domain/homes/match.home.js";
import mongoose from "mongoose";
import _ from "lodash";
import Promise from "bluebird";


const config = require("./config")
console.log(config.mongo.uri)
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");
const fraseHome = new FraseHome();
const matchHome = new MatchHome();


const phases = {
  "fourths": {
    previous: "eights",
    count: 8
  },
  "semi": {
    previous: "fourths",
    count: 4
  },
  "final": { 
    previous:"semi",
    count: 2
  },
   "thirdPlace": { 
    previous:"semi",
    count: 2
  }
}

const getWinner = (fraseA, fraseB, previous, phase) => {
  const quantityA = fraseA.votesQuantity[previous];
  const quantityB = fraseB.votesQuantity[previous];
  const operation = phase == "thirdPlace" ? _.minBy : _.maxBy;
  const criteria = quantityA == quantityB ? "coeficienteAutista" : `votesQuantity.${previous}`;
  return operation([fraseA, fraseB], criteria);
}

const generateMatchesFor = (phase) => {
  const { count, previous }= phases[phase];
  matchHome.getAll({ phase: previous })
  .map(({ fraseA, fraseB }) => getWinner(fraseA, fraseB, previous, phase))
  .then(it => _.shuffle(it))
  .then(it => [_.slice(it, 0, count/2), _.slice(it, count/2, count)])
  .then(([one, other]) => _.zip(one, other))
  .map(([{ _id: fraseA }, {_id: fraseB }]) => ({ fraseA, fraseB, phase}))
  .map(match => matchHome.create(match))
  .then(() => matchHome.getAll({ phase }))
  .tap(it => console.log("GGG", JSON.stringify(it)))

}


generateMatchesFor("final") ;

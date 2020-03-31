import FraseHome from "./domain/homes/frase.home.js";
import mongoose from "mongoose";
import _ from "lodash";
import Promise from "bluebird";


const config = require("./config")
console.log(config.mongo.uri)
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");
const fraseHome = new FraseHome();


fraseHome.getAll({ qualified: true }, 0, 50)
.then(qualified => _(qualified).groupBy("group").map(_.identity).value())
.map(group => _(group).orderBy(["votesQuantity.groupStage", "coeficienteAutista"], ["desc", "desc"]).take(2).value())
.tap(it => console.log("CC", it))
.then(it => _(it).flatten().shuffle().value())
.then(it => [_.slice(it, 0, 8), _.slice(it, 8, 16)])
.then(([one, other]) => console.log(one, other) || _.zip(one, other))
.tap(it => console.log("GGG", JSON.stringify(it)))





const Promise = require("bluebird");
const mongoose = require("mongoose");
const FraseHome = require("./domain/homes/frase.home").default;
const { ObjectId } = mongoose.Types;
const config = require("./config")
console.log(config.mongo.uri)
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");

const fraseHome = new FraseHome();

const YEARS = ["2013", "2014", "2015", "2016", "2017", "2018", "2019"]


const _setPreSelected = (anio) => {
  console.log(anio)
  return fraseHome.getAll({ anio }, 0, 15 ,{ coeficienteAutista: -1 })
    .tap(it => console.log(it.length))
    .map(({ _id }) => new ObjectId(_id))
    .then(ids => fraseHome.update({ _id: { $in: ids } }, { preSelected: true }, { multi: true }))

}

Promise.map(YEARS, _setPreSelected)


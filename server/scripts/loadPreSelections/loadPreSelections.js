const _ = require("lodash");
const Promise = require("bluebird");
const mongoose = require("mongoose");
const FraseHome = require("./domain/homes/frase.home").default;
const SelectionHome = require("./domain/homes/selection.home").default;
const { ObjectId } = mongoose.Types;
const config = require("./config")
console.log(config.mongo.uri)
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");

const fraseHome = new FraseHome();
const selectionHome = new SelectionHome();
const sida = Array.from(Array(100).keys());

const _takeSample = (preSelection) => {
    const [frasesAnio, normales] = _(preSelection)
      .map(it => _.pick(it, ["_id", "anio", "autor", "fraseDelAnio"]))
      .partition("fraseDelAnio");
    return _(normales)
      .sampleSize(25)
      .concat(frasesAnio)
      .value();
}

const _makeASelection = (preSelection, i) => {
    const selection = _takeSample(preSelection)
    return Promise.resolve(_validateSelection(selection, preSelection))
      .then(selection => selectionHome.create({ frases: selection }))
      .catch(it => console.log("FAILED", i))
      .tap(() => console.log("DONE", i))

  }
const _validateSelection = (selection, preSelection) => {
    const autorCount = _.countBy(selection, "autor")
    const anioCount = _.countBy(selection, "anio");
    const validAutors = _.every(autorCount, (value, key ) => value <= 10)
    const validAnios = _.every(anioCount, (value, key ) => value >= 3);
    if( validAnios && validAutors )
      return _.map(selection, ({ _id }) =>  new ObjectId(_id));



    return _validateSelection(_takeSample(preSelection), preSelection)


  }


fraseHome.getAll({ preSelected: true }, 0, 115)
      .then(preSelection => Promise.map(sida, (_, i) => _makeASelection(preSelection, i), { concurrency: 10 }))
      .then(() => process.exit(0))
      .catch(() => process.exit(1))
      
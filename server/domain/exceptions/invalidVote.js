export default class InvalidVote {
  constructor(err) {
    this.name = "InvalidVote";
    this.statusCode = 400;
    this.body = {
      message: "Mira capoeira, tu voto es invalido. Dos opciones: hay terrible error en el codigo o estas intentando hacerte el capo. Usa la UI forrito."
    };
  }
};

InvalidVote.prototype = Object.create(Error.prototype);

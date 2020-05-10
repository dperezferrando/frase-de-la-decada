export default class VoteFailed {
  constructor(err) {
    this.name = "VoteFailed";
    this.statusCode = 500;
    this.body = {
      message: "ERROR EN LA VOTACION. Hubo un error que no estaba estipulado. Esto es muy malo. Informar a PEREZ."
    };
  }
};

VoteFailed.prototype = Object.create(Error.prototype);

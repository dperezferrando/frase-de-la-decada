export default class VoteFailed {
  constructor(err) {
    this.name = "VoteFailed";
    this.statusCode = 500;
    this.body = {
      message: "ERROR EN LA VOTACION - Intentar de nuevo, aunque posiblemente haya estados inconsistentes. Sino informar a PEREZ"
    };
  }
};

VoteFailed.prototype = Object.create(Error.prototype);

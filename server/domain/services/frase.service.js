import FraseHome from "../homes/frase.home.js";


class FraseService {
  constructor() {
    this.home = new FraseHome();
  }

  getAll(query, offset = 0, limit = 25) {
    return this.home.getAll(query, offset, limit, { coeficienteAutista: -1 })
      .then(results => ({ results, offset, limit }));
  }

}

export default FraseService;
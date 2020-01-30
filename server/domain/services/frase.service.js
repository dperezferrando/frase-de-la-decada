import FraseHome from "../homes/frase.home.js";

class FraseService {
  constructor() {
    this.home = new FraseHome();
  }

  getAll({ frase, ...other}, offset = 0, limit = 25) {
    const query = frase ? { frase: new RegExp(frase, "gi"), ...other } : other; 
    return this.home.getAll(query, offset, limit, { coeficienteAutista: -1 })
      .then(results => ({ results, offset, limit }));
  }

}

export default FraseService;
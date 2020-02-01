import FraseHome from "../homes/frase.home.js";
import mongoose from "mongoose";

mongoose.set("debug", true)

class FraseService {
  constructor() {
    this.home = new FraseHome();
  }

  getAll({ frase, ...other}, offset = 0, limit = 25) {
    const query = frase ? { frase: new RegExp(frase, "gi"), ...other } : other; 
    other.fraseDelAnio = other.fraseDelAnio == "true"
    return this.home.aggregate([
      { "$facet": {
        "results": [
          { "$match": query },
          { "$sort": { coeficienteAutista: -1 } },
          { "$skip": parseInt(offset) },
          { "$limit": parseInt(limit) }
        ],
        "totalCount": [
          { "$match": query },
          { "$count": "count" }
        ]
      }
    }
    ])
    .get(0)
    .then(({ results, totalCount: [{ count }] } ) => ({ 
      total: count,
      results,
      offset,
      limit,
    }));
  }

}

export default FraseService;
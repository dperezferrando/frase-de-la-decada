import FraseHome from "../homes/frase.home.js";
import mongoose from "mongoose";

mongoose.set("debug", true)

class FraseService {
  constructor() {
    this.home = new FraseHome();
  }

  getAll({ frase, ...other}, offset = 0, limit = 25) {
    const query = frase ? { frase: new RegExp(frase, "gi"), ...other } : other; 
    query.fraseDelAnio = query.fraseDelAnio == "true"
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
    .then(({ results, totalCount: [countObj] } ) => ({ 
        total: countObj ? countObj.count : 0,
        results,
        offset,
        limit
    }));
  }

}

export default FraseService;
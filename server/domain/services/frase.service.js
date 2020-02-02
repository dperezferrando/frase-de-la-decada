import FraseHome from "../homes/frase.home.js";
import VotesService from "../services/vote.service.js";
import _ from "lodash";

class FraseService {
  constructor(user) {
    this.home = new FraseHome();
    this.votesService = new VotesService(user);
  }

  vote({ phase, frases }) {
    // VALIDAR FECHA
    // VALIDAR LO QUE SEA
    const ids = _.map(frases, "_id");
    return this.home.vote(phase, ids)
      .then(() => this.votesService.createVotes(phase, ids)); // create votes
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
          { "$limit": parseInt(limit) },
          { "$project": { votesQuantity: 0 }}
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
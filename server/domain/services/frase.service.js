import FraseHome from "../homes/frase.home.js";
import VotesService from "../services/vote.service.js";
import UserService from "../services/user.service.js";
import SelectionService from "../services/selection.service.js";
import _ from "lodash";

class FraseService {
  constructor(user) {
    this.user = user;
    this.home = new FraseHome();
    this.votesService = new VotesService(user);
    this.userService = new UserService();
    this.selectionService = new SelectionService();
  }

  vote({ phase, frases }) {
    // VALIDAR FECHA
    // VALIDAR LO QUE SEA
    const ids = _.map(frases, "_id");
    return this.home.vote(phase, ids)
      .then(() => this.votesService.createVotes(phase, ids)) // create votes
      .then(() => this.userService.vote(this.user, phase));
      // GUARDA INCONSISTENCIAS
  }

  trolo() {
    return this.selectionService.random()
      .then(({ frases }) => this.getAll({ _id: { $in: frases } }, 0, 32 ));
  }

  getAll({ frase, ...other}, offset = 0, limit = 25) {
    const query = frase ? { frase: new RegExp(frase, "gi"), ...other } : other; 
    if(query.fraseDelAnio)
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
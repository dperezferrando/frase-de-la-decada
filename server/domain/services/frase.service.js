import _ from "lodash";
import Promise from "bluebird";
import FraseHome from "../homes/frase.home.js";
import VotesService from "../services/vote.service.js";
import UserService from "../services/user.service.js";
import SelectionService from "../services/selection.service.js";
import InvalidVote from "../exceptions/invalidVote";
import VoteFailed from "../exceptions/voteFailed";
import voteValidator from "../voteValidators";

class FraseService {
  constructor(user) {
    this.user = user;
    this.home = new FraseHome();
    this.votesService = new VotesService(user);
    this.userService = new UserService();
    this.selectionService = new SelectionService();
  }

  vote({ phase, frases }) {
    // OTRO OBJETO DEBERIA HACER ESTE CRAP
    const ids = _.map(frases, "_id");
    return this.home.getAll({ _id: { $in: ids }}, 0, 32)
      .then(selection => this._validate(phase, selection))
      .then(() => this.home.vote(phase, ids))
      .then(() => this.votesService.createVotes(phase, ids))
      .then(() => this.userService.vote(this.user, phase))
      .catch(({ name }) => name != "InvalidVote", () => { throw new VoteFailed()})
  }

  qualified() {
    return this.home.aggregate([
      { $sort: { "votesQuantity.qualifiers": -1 , "coeficienteAutista": -1, "anio": -1  } },
      { $limit: 50 }
    ])
  }

  _validate(phase, selection) {
    if(!voteValidator(phase).validate(selection))
      return Promise.reject(new InvalidVote())
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
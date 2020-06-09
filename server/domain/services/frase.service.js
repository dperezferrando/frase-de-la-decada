import _ from "lodash";
import Promise from "bluebird";
import FraseHome from "../homes/frase.home.js";
import SelectionService from "../services/selection.service.js";
import VoteFailed from "../exceptions/voteFailed";
import phaseVoter from "../phaseVoters";
import ErrorHome from "../homes/error.home.js";
import config from "../../config";
import moment from "moment";

class FraseService {
  constructor(user) {
    this.user = user;
    this.home = new FraseHome();
    this.selectionService = new SelectionService();
    this.errorHome = new ErrorHome();
  }

  vote({ phase, frases, ...other }) {
    const ids = _.map(frases, "_id");
    const voter = phaseVoter(phase, this.user);
    return voter.vote(ids, other)
      .catch(({ name }) => name != "InvalidVote", (err) => this._handleUnknownErorr(err, phase, frases))
  }

  qualified() {
    const base = [{ $sort: { "qualified": -1, "votesQuantity.qualifiers": -1 ,  "fraseDelAnio": -1, "coeficienteAutista": -1, "anio": -1  } },
      { $limit: 50 }]

    const votesProjection =  this._getVotesProjection();

    if(!_.isEmpty(votesProjection))
      base.push({ "$project":  votesProjection });
    return this.home.aggregate(base);
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
          { "$sort": { coeficienteAutista: -1, frase: 1 } },
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

  _handleUnknownErorr({ name, stack, message}, phase, frases) {
    return this.errorHome.create({ user: this.user.name, name, stack, message, phase, frases})
    .tap(() => Promise.reject(new VoteFailed()))
  }


  _getVotesProjection() {
    const phases = ["groupStage", "eights", "fourths", "semi", "thirdPlace", "final"];
    const projection = {};
    phases.forEach(phase => {
      if(moment().isBefore(config[phase].resultsDate))
        _.assign(projection, { [`votesQuantity.${phase}`] : 0})
    })
    return projection;
  }

}

export default FraseService;
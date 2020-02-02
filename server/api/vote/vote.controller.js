import Promise from "bluebird";

class VoteController {

  votes({ service, params: { phase } }) {
    return service.votes(phase);
  }

}

export default VoteController;
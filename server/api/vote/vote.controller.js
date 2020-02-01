import Promise from "bluebird";

class VoteController {

  qualificationVote({ service, body }) {
    return service.qualificationVote(body);
  }

}

export default VoteController;
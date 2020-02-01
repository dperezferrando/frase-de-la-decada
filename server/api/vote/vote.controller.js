import Promise from "bluebird";

class VoteController {

  qualificationVote({ service }) {
    return service.qualificationVote();
  }

}

export default VoteController;
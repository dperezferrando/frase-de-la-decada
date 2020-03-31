import Promise from "bluebird";

class MatchController {

  matches({ service, params: { phase } }) {
    return service.matches(phase);
  }

}

export default MatchController;
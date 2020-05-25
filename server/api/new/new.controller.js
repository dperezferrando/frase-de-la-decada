import Promise from "bluebird";

class NewController {

  matches({ service }) {
    return service.news();
  }

}

export default NewController;
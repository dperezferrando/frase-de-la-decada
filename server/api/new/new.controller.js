import Promise from "bluebird";

class NewController {

  news({ service }) {
    return service.news();
  }

}

export default NewController;
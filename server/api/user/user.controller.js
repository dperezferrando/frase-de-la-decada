import Promise from "bluebird";

class UserController {

  me({ service, user: { googleId } }) {
    return service.get({ googleId });
  }

}

export default UserController;
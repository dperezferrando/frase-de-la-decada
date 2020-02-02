import Promise from "bluebird";

class UserController {

  me({ service, user }) {
    return service.get(user);
  }

}

export default UserController;
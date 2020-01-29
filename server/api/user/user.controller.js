import Promise from "bluebird";

class UserController {

  me({ user }) {
    return Promise.resolve(user);
  }

}

export default UserController;
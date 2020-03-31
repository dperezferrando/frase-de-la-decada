import UserHome from "../homes/user.home";


class UserService {

  constructor() {
    this.home = new UserHome();
  }

  vote(user, value) {
    return this.home.update({ googleId: user.googleId }, value);
  }

  get(query) {
    return this.home.findOne(query);
  }


}

export default UserService;
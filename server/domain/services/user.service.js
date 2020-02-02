import UserHome from "../homes/user.home";


class UserService {

  constructor() {
    this.home = new UserHome();
  }

  vote(user, phase) {
    return this.home.update({ googleId: user.googleId }, { [`voted.${phase}`]: true });
  }

  get(query) {
    return this.home.findOne(query);
  }


}

export default UserService;
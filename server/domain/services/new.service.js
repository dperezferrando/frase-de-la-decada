import NewHome from "../homes/new.home";

class NewService {

  constructor() {
    this.home = new NewHome();
  }

  news() {
    return this.home.getAll({});
  }

}

export default NewService;
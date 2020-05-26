import NewHome from "../homes/new.home";

class NewService {

  constructor() {
    this.home = new NewHome();
  }

  news() {
    return this.home.getAll({ hidden: false }, 0, 25, { date: 1 });
  }

}

export default NewService;
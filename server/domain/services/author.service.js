import AuthorHome from "../homes/author.home.js";


class AuthorService {
  constructor() {
    this.home = new AuthorHome();
  }

  getAll(query, offset = 0, limit = 25) {
    return this.home.getAll(query, offset, limit);
  }

}

export default AuthorService;
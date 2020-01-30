import Home from "./home";
import AuthorModel from "../schemas/author.model.js"

class AuthorHome extends Home {
  constructor() {
    super(AuthorModel);
  }
}

export default AuthorHome;



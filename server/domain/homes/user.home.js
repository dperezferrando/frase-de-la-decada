import Home from "./home";
import UserModel from "../schemas/user.model.js"

class UserHome extends Home {
  constructor() {
    super(UserModel);
  }
}

export default UserHome;



import Home from "./home";
import ErrorModel from "../schemas/error.model.js"

class ErrorHome extends Home {
  constructor() {
    super(ErrorModel);
  }

}

export default ErrorHome;



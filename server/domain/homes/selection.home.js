import Home from "./home";
import SelectionModel from "../schemas/selection.model.js"
import mongoose from "mongoose";
const { ObjectId } = mongoose.Types;

class SelectionHome extends Home {
  constructor(user) {
    super(SelectionModel);
    this.user = user;
  }

  random() {
    return this.aggregate([{ $sample: { size: 1 }}])
  }

}

export default SelectionHome;



import express from "express";
import Controller from "./author.controller";
import Service from "../../domain/services/author.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

router.use((req, res, next) => {
  req.service = new Service();
  next();
});


route.get("/", controller.getAll);

export default router;

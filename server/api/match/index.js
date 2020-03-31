import express from "express";
import Controller from "./match.controller";
import Service from "../../domain/services/match.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

router.use((req, res, next) => {
  req.service = new Service(req.user);
  next();
});

route.get("/:phase", controller.matches);

export default router;

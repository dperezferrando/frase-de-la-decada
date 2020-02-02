import express from "express";
import Controller from "./vote.controller";
import Service from "../../domain/services/vote.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

router.use((req, res, next) => {
  req.service = new Service(req.user);
  next();
});

route.get("/:phase", controller.votes);

export default router;

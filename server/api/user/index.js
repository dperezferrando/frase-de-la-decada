import express from "express";
import Controller from "./user.controller";
import Service from "../../domain/services/user.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

router.use((req, res, next) => {
  req.service = new Service(req.user);
  next();
});

route.get("/me", controller.me);

export default router;

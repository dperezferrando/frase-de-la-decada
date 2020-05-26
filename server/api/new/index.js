import express from "express";
import Controller from "./new.controller";
import Service from "../../domain/services/new.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

router.use((req, res, next) => {
  req.service = new Service(req.user);
  next();
});

route.get("/", controller.news);

export default router;

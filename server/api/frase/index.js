import express from "express";
import Controller from "./frase.controller";
import Service from "../../domain/services/frase.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

router.use((req, res, next) => {
  req.service = new Service(req.user);
  next();
});


route.get("/", controller.getAll);
route.get("/trolo", controller.trolo);
route.get("/qualified", controller.qualified);
route.get("/mostVoted", controller.mostVoted);
route.get("/stats", controller.stats);
route.get("/destacadas", controller.destacadas);
route.post("/votes", controller.vote)

export default router;

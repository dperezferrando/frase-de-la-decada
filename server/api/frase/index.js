import express from "express";
import Controller from "./frase.controller";
import Service from "../../domain/services/frase.service";
//import authenticated from "../../auth/auth.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

//router.use(authenticated);
router.use((req, res, next) => {
  req.service = new Service();
  next();
});


route.get("/", controller.getAll);

export default router;

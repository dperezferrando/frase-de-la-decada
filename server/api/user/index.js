import express from "express";
import Controller from "./user.controller";
import Service from "../../domain/services/user.service";
//import authenticated from "../../auth/auth.service";

let router = express.Router();
let { route } = require("endpoint-handler")(router);
const controller = new Controller();

//router.use(authenticated);
router.use((req, res, next) => {
  req.service = new Service(req.user);
  next();
});

route.get("/me", controller.me);

export default router;

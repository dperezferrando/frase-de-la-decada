import users from "../api/user";
import frases from "../api/frase";

export default (app) => {

  app.use("/api/test", ({ user }, res) => res.send({ test: `hola ${user.name}`}));
  app.use("/api/users", users);
  app.use("/api/frases", frases);


}
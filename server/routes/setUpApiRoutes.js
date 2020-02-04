import users from "../api/user";
import frases from "../api/frase";
import authors from "../api/author";
import votes from "../api/vote";

export default (app) => {

  app.use("/api/test", ({ user }, res) => res.send({ test: `hola ${user.name}`}));
  app.use("/api/users", users);
  app.use("/api/frases", frases);
  app.use("/api/authors", authors);
  app.use("/api/votes", votes);

}
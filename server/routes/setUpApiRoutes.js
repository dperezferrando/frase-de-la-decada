import users from "../api/user";

export default (app) => {

  app.use("/api/test", ({ user }, res) => res.send({ test: `hola ${user.name}`}));
  app.use("/api/users", users);


}
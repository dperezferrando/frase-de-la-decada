import express from "express";
import path from "path";
import mongoose from "mongoose";
import config from './config';
import setUpAuthMiddlewares, { authValidation } from "./routes/setUpAuthMiddlewares";
import setUpAuthRoutes from "./routes/setUpAuthRoutes";
const app = express();
const PORT = process.env.PORT || 9001; 
const PUBLIC_DIR = path.join(__dirname, '/../public');
const morgan = require('morgan');

mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");

app.use(morgan("dev"));  

setUpAuthMiddlewares(app);

// PUBLIC ROUTES

setUpAuthRoutes(app);

app.use(authValidation);

// PRIVATE ROUTES
app.use("/api/test", ({ user }, res) => res.send({ test: `hola ${user.name}`}));

app.use(express.static(PUBLIC_DIR));

app.get('/*', function (req, res) {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT,  () => startUpMessage());


const startUpMessage = () => {
  console.log("------------------------------------------------------");
  console.log("ENVIRONMENT:", process.env.NODE_ENV)
  console.log(`Server listening on port ${PORT}!`)
  console.log("CONNECTED TO:", config.mongo.uri)
  console.log("------------------------------------------------------");
}

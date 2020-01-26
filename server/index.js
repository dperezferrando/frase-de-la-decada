const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require('./config');
const app = express();
const PORT = process.env.PORT || 9001; 
const PUBLIC_DIR = path.join(__dirname, '/../public');
const { setUpEnvVars } = require('../webpack/setUpLocalEnv');

if(process.env.NODE_ENV == "development")
  setUpEnvVars()

mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");

app.use("/api/test", (req, res) => res.send({ test: "hola "}));

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

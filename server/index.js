const { setUpEnvVars } = require('../webpack/setUpLocalEnv');
if(process.env.NODE_ENV == "development")
  setUpEnvVars()
require("@babel/register");
require("./server");
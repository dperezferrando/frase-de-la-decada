const { setUpEnvVars } = require('../webpack/setUpLocalEnv');
setUpEnvVars()
require("@babel/register")
require("./loadPreSelections.js")
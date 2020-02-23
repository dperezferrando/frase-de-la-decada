require("@babel/register")
const { setUpEnvVars } = require('../webpack/setUpLocalEnv');
setUpEnvVars()

require("./qualification.js")
const _ = require("lodash");

let env = {};

try {
  env = require("../server/config/env.js");
} catch (e) { }



module.exports = { 
  envVars: _(env)
    .map((value,variable) => [ `process.env.${variable}`, JSON.stringify(value) ])
    .fromPairs()
    .value(),
  setUpEnvVars: () => _.forEach(env, (value, variable) => {process.env[variable] = value})
};
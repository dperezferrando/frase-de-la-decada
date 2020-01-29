const _ = require("lodash");

let env = {};

try {
  env = require("../server/config/env.js");
} catch (e) { }


const envVariables = _.assign( { }, {
  'DOMAIN': process.env.DOMAIN
}, env);


module.exports = { 
  envVars: _(envVariables)
    .map((value,variable) => [ `process.env.${variable}`, JSON.stringify(value) ])
    .fromPairs()
    .value(),
  setUpEnvVars: () => _.forEach(env, (value, variable) => {process.env[variable] = value})
};
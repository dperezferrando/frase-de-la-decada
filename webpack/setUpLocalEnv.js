const _ = require("lodash");

let env = {};

try {
  env = require("../server/config/env.js");
} catch (e) { }


const envVariables = _.assign( { }, {
  'DOMAIN': process.env.DOMAIN,
  "QUALIFIERS_START_DATE": process.env.QUALIFIERS_START_DATE,
  "QUALIFIERS_END_DATE": process.env.QUALIFIERS_END_DATE,
  "QUALIFIERS_RESULTS_DATE": process.env.QUALIFIERS_RESULTS_DATE,
  "GROUPSTAGE_START_DATE": process.env.GROUPSTAGE_START_DATE,
  "GROUPSTAGE_END_DATE": process.env.GROUPSTAGE_END_DATE,
  "GROUPSTAGE_RESULTS_DATE": process.env.GROUPSTAGE_RESULTS_DATE,
  "EIGHTS_START_DATE": process.env.EIGHTS_START_DATE,
  "EIGHTS_END_DATE": process.env.EIGHTS_END_DATE,
  "EIGHTS_RESULTS_DATE": process.env.EIGHTS_RESULTS_DATE,
  "FOURTHS_START_DATE": process.env.FOURTHS_START_DATE,
  "FOURTHS_END_DATE": process.env.FOURTHS_END_DATE,
  "FOURTHS_RESULTS_DATE": process.env.FOURTHS_RESULTS_DATE,
  "SEMI_START_DATE": process.env.SEMI_START_DATE,
  "SEMI_END_DATE": process.env.SEMI_END_DATE,
  "SEMI_RESULTS_DATE": process.env.SEMI_RESULTS_DATE,
  "THIRDPLACE_START_DATE": process.env.THIRDPLACE_START_DATE,
  "THIRDPLACE_END_DATE": process.env.THIRDPLACE_END_DATE,
  "THIRDPLACE_RESULTS_DATE": process.env.THIRDPLACE_RESULTS_DATE,
  "FINAL_START_DATE": process.env.FINAL_START_DATE,
  "FINAL_END_DATE": process.env.FINAL_END_DATE,
  "FINAL_RESULTS_DATE": process.env.FINAL_RESULTS_DATE
}, env);


module.exports = { 
  envVars: _(envVariables)
    .map((value,variable) => [ `process.env.${variable}`, JSON.stringify(value) ])
    .fromPairs()
    .value(),
  setUpEnvVars: () => _.forEach(env, (value, variable) => {process.env[variable] = value})
};
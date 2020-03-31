const _ = require("lodash");
const moment = require('moment');

module.exports = {
 
  domain: process.env.DOMAIN || "http://localhost:9001",
  qualifiers: {
    endDate: moment(new Date(process.env.QUALIFIERS_END_DATE || "1/1/2021")),
    resultsDate: moment(new Date(process.env.QUALIFIERS_RESULTS_DATE || "1/1/2021"))
  },
  groupStage: {
    startDate: moment(new Date(process.env.GROUPSTAGE_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.GROUPSTAGE_END_DATE || "1/1/2021")),
    resultsDate: moment(new Date(process.env.GROUPSTAGE_RESULTS_DATE || "1/1/2021"))
  }

}
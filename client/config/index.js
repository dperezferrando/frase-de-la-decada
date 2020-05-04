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
  },
  eights: {
    startDate: moment(new Date(process.env.EIGHTS_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.EIGHTS_END_DATE || "1/1/2021")),
    resultsDate: moment(new Date(process.env.EIGHTS_RESULTS_DATE || "1/1/2021"))
  },

  fourths: {
    startDate: moment(new Date(process.env.FOURTHS_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.FOURTHS_END_DATE || "1/1/2021")),
    resultsDate: moment(new Date(process.env.FOURTHS_RESULTS_DATE || "1/1/2021"))
  },

  semi: {
    startDate: moment(new Date(process.env.SEMI_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.SEMI_END_DATE || "1/1/2021")),
    resultsDate: moment(new Date(process.env.SEMI_RESULTS_DATE || "1/1/2021"))
  },
  
  final: {
    startDate: moment(new Date(process.env.FINAL_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.FINAL_END_DATE || "1/1/2021")),
    resultsDate: moment(new Date(process.env.FINAL_RESULTS_DATE || "1/1/2021"))
  },
  
  thirdPlace: {
    startDate: moment(new Date(process.env.THIRDPLACE_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.THIRDPLACE_END_DATE || "1/1/2021")),
    resultsDate: moment(new Date(process.env.THIRDPLACE_RESULTS_DATE || "1/1/2021"))
  }



}
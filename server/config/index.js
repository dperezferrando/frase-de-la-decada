const _ = require("lodash");
const moment = require('moment');

const commonConfig = {
 
  domain: process.env.DOMAIN || "http://localhost:9001",

  google: {
    clientID: process.env.GOOGLE_OAUTH_CLIENTID,
    secret: process.env.GOOGLE_OAUTH_SECRET,
    scopes: JSON.parse(process.env.GOOGLE_SCOPES || '["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email"]')
  },

  session: {
    cookieSecret: process.env.COOKIE_SECRET || "a nisman lo mataron"
  },

  qualifiers: {
    endDate: moment(new Date(process.env.QUALIFIERS_END_DATE || "1/1/2021"))
  },

  groupStage: {
    startDate: moment(new Date(process.env.GROUPSTAGE_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.GROUPSTAGE_END_DATE || "1/1/2021"))
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
  },


  mongo: {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  },
  port: process.env.PORT || process.env.$PORT || 9001

}


const envConfig = require(`./${process.env.NODE_ENV}`);

module.exports = _.merge(commonConfig, envConfig || {});
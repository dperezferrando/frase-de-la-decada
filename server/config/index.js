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

  eigthsStage: {
    startDate: moment(new Date(process.env.EIGHTSTAGE_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.EIGHTSTAGE_END_DATE || "1/1/2021"))
  },

  fourthsStage: {
    startDate: moment(new Date(process.env.FOURTHSTAGE_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.FOURTHSTAGE_END_DATE || "1/1/2021"))
  },

  semiStage: {
    startDate: moment(new Date(process.env.SEMISTAGE_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.SEMISTAGE_END_DATE || "1/1/2021"))
  },
  
  finalStage: {
    startDate: moment(new Date(process.env.FINALSTAGE_START_DATE || "1/1/2020")),
    endDate: moment(new Date(process.env.FINALSTAGE_END_DATE || "1/1/2021"))
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
const _ = require("lodash");

const commonConfig = {
 
  domain: process.env.DOMAIN || "http://localhost:9001",

  google: {
    clientID: process.env.GOOGLE_OAUTH_CLIENTID,
    secret: process.env.GOOGLE_OAUTH_SECRET
  },

  session: {
    cookieSecret: process.env.COOKIE_SECRET || "a nisman lo mataron"
  },

  mongo: {
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }

}


const envConfig = require(`./${process.env.NODE_ENV}`);

module.exports = _.merge(commonConfig, envConfig || {});
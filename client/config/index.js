const _ = require("lodash");
const moment = require('moment');

module.exports = {
 
  domain: process.env.DOMAIN || "http://localhost:9001",
  qualifiers: {
    endDate: moment(new Date(process.env.QUALIFIERS_END_DATE || "1/1/2021"))
  }

}
export default class NotFound {
  constructor(err) {
    this.name = "NotFound";
    this.statusCode = 404;
    this.body = {
      message: "What you are looking for wasn't found"
    };
  }
};

NotFound.prototype = Object.create(Error.prototype);

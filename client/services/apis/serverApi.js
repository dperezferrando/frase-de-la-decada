import request from "request-promise";
import config from "../../config";
const baseUrl = `${config.domain}/api`;

class ServerApi {
  
  user() {
    return this.get("/users/me");
  }

  logout() {
    return this.post("/logout");
  }

  delete(resource, body) {
    return this._request("DELETE", resource, body);
  }

  post(resource, body) {
    return this._request("POST", resource, body);
  }

  get(resource) {
    return this._request("GET", resource)
  }

  _request(method, resource, body) {
    return request({ 
      method,
      url: `${baseUrl}${resource}`,
      json: true,
      jar: true,
      body
    }).promise()
  }
}

export default new ServerApi()

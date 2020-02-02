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

  frases(options) {
    return this.get("/frases", options);
  }

  authors() {
    return this.get("/authors");
  }

  vote(phase, frases) {
    return this.post("/frases/votes", { phase, frases });
  }

  votes(phase) {
    return this.get(`/votes/${phase}`);
  }

  delete(resource, body) {
    return this._request({ method: "DELETE", resource, body });
  }

  post(resource, body) {
    return this._request({ method: "POST", resource, body });
  }

  get(resource, qs) {
    return this._request({ method: "GET", resource, qs })
  }

  _request({ method, resource, body, qs }) {
    return request({ 
      method,
      url: `${baseUrl}${resource}`,
      json: true,
      jar: true,
      qs,
      body
    }).promise()
  }
}

export default new ServerApi()

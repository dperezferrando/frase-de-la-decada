import request from "request-promise";
import config from "../../config";
const baseUrl = `${config.domain}/api`;
console.log("AAA", baseUrl)

class ServerApi {
  
  user() {
    return this.get("/users/me");
  }

  frases(options) {
    return this.get("/frases", options);
  }

  qualified() {
    return this.get("/frases/qualified");
  }

  authors() {
    return this.get("/authors");
  }

  vote(phase, frases, other = {}) {
    return this.post("/frases/votes", { phase, frases, ...other });
  }

  votes(phase) {
    return this.get(`/votes/${phase}`);
  }

  preselection() {
    return this.get("/frases/trolo");
  }

  matches() {
    return this.get(`/matches`);
  }

  news() {
    return this.get(`/news`);
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

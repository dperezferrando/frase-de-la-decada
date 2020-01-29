import passport from "passport";
import config from "../config";

const loginOrRedict = (req, res) => {
  if(req.isAuthenticated())
    res.redirect("/inicio");
  else
    res.send("<a href='/auth/google'>Login</a>");
}

export default (app) => {

  app.get('/', loginOrRedict)

  app.get('/auth/google',
    passport.authenticate('google', { scope: config.google.scopes }));

  app.get('/api/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/inicio');
    });

  app.post('/api/logout', (request, response) => {
    request.logout();
    response.redirect("/");
  });

} 
import passport from "passport";
import config from "../config";
import path from "path";
const PUBLIC_DIR = path.join(__dirname, '/../../public');

const loginOrRedict = (req, res) => {
  if(req.isAuthenticated())
    res.redirect("/inicio");
  else
    res.sendFile(path.join(PUBLIC_DIR, 'publicIndex.html'));
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
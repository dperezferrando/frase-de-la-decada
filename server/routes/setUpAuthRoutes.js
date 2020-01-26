import passport from "passport";
import config from "../config";

export default (app) => {

  app.get('/login', (req, res) => res.send("login"))

  app.get('/auth/google',
    passport.authenticate('google', { scope: config.google.scopes }));

  app.get('/api/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

} 
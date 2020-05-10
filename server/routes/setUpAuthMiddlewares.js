import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from "passport";
import config from '../config';
import { googleStrategy } from "../auth/google";
import cookieSession from 'cookie-session';
import UserService from "../domain/services/user.service";

export default (app) => {  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cookieSession({ name: 'session', secret: config.session.cookieSecret }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.use(googleStrategy);
  passport.serializeUser(function({ _id }, done) {
    const encodedUser = new Buffer(JSON.stringify({_id })).toString("base64");
    done(null, encodedUser);
  });
  passport.deserializeUser(function(encodedUser, done) {
    const id = JSON.parse(new Buffer(encodedUser, "base64").toString("utf8"));
    new UserService().get(id)
      .then(user => done(null, user))
    
  });

}

export const authValidation = (request, response, next) => {
    if (request.isAuthenticated()) {
        return next();
    }
    response.redirect("/");
};
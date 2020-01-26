import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from "passport";
import config from '../config';
import { googleStrategy } from "../auth/google";

export default (app) => {  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(session({ secret: config.session.cookieSecret, resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.use(googleStrategy);
  passport.serializeUser(function(user, done) {
    const encodedUser = new Buffer(JSON.stringify(user)).toString("base64");
    done(null, encodedUser);
  });
  passport.deserializeUser(function(encodedUser, done) {
    const user = JSON.parse(new Buffer(encodedUser, "base64").toString("utf8"));
    done(null, user);
  });

}

export const authValidation = (request, response, next) => {
    if (request.isAuthenticated()) {
        return next();
    }
    response.redirect("/");
};
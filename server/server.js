const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const config = require('./config');
const app = express();
const PORT = process.env.PORT || 9001; 
const PUBLIC_DIR = path.join(__dirname, '/../public');
const passport = require("passport");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
import UserHome from "./domain/homes/user.home";
import NotFound from "./domain/exceptions/notFound";

mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.Promise = require("bluebird");

app.use(morgan("dev"));  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: config.session.cookieSecret, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.secret,
    callbackURL: `${config.domain}/api/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, done) {
    const userHome = new UserHome();
    userHome.findOne({ googleId: profile.id })
     .then(user => done(null, user))
     .catch(NotFound, () => 
      userHome.create({ googleId: profile.id, email: (profile.emails.find(email => email.verified) || profile.emails[0]).value, name: profile.name.givenName })
      .then(user => done(null, user))
      )
      
  }
));

passport.serializeUser(function(user, done) {
  const encodedUser = new Buffer(JSON.stringify(user)).toString("base64");
  done(null, encodedUser);
});

passport.deserializeUser(function(encodedUser, done) {
  const user = JSON.parse(new Buffer(encodedUser, "base64").toString("utf8"));
  done(null, user);
});


const authValidation = (request, response, next) => {
    if (request.isAuthenticated()) {
        return next();
    }
    response.redirect("/login");
};

app.get('/login', (req, res) => res.send("login"))

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'] }));

app.get('/api/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });


app.use(authValidation);

app.use("/api/test", ({ user }, res) => res.send({ test: `hola ${user.name}`}));

app.use(express.static(PUBLIC_DIR));

app.get('/*', function (req, res) {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT,  () => startUpMessage());


const startUpMessage = () => {
  console.log("------------------------------------------------------");
  console.log("ENVIRONMENT:", process.env.NODE_ENV)
  console.log(`Server listening on port ${PORT}!`)
  console.log("CONNECTED TO:", config.mongo.uri)
  console.log("------------------------------------------------------");
}

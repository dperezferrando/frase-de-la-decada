import config from "../../config";
import UserHome from "../../domain/homes/user.home";
import NotFound from "../../domain/exceptions/notFound";
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const _createUser = (userHome, profile, done) => {
  return userHome.create({ 
    googleId: profile.id, 
    email: (profile.emails.find(email => email.verified) || profile.emails[0]).value,
    name: profile.name.givenName
  })
    .then(user => done(null, user))
}

const googleCallbackHandler = (accessToken, refreshToken, profile, done) => {
  const userHome = new UserHome();
  userHome.findOne({ googleId: profile.id })
   .then(user => done(null, user))
   .catch(NotFound, () => _createUser(userHome, profile, done))
}

export const googleStrategy = new GoogleStrategy({
  clientID: config.google.clientID,
  clientSecret: config.google.secret,
  callbackURL: `${config.domain}/api/auth/google/callback`
}, googleCallbackHandler)


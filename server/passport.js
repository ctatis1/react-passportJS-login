const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(new GoogleStrategy({
    clientID: "46819182218-u606jichkjnrgp9q9nlgfot9151p44j6.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost/5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    done(null, profile);
  }
));

passport.serializeUser((user,done) => done(null, user));
passport.deserializeUser((user,done) => done(null, user));
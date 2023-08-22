const express = require('express'); //this is to import modules - the reason that we do not use import is because node cannot use import
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys');

const app = express();

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken) => {
        console.log(accessToken);
    })
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);


const PORT = process.env.PORT || 5000; // this will listen to the port provided by the deployment services
                                       // if || 5000 means that if the port is not defined than it will route to 5000
                                       // this is simply to route it to 5000 when we are developing the app
app.listen(PORT);
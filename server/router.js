import express from 'express';
import path from 'path';
import passport from 'passport';

let GitHubStrategy = require('passport-github2').Strategy;

module.exports = (app) => {

    app.use(passport.initialize());
    app.use(passport.session());

    const router = express.Router();

    // passport.js start
    let GITHUB_CLIENT_ID = "";
    let GITHUB_CLIENT_SECRET = "";

    passport.serializeUser((user, done) => {
        console.log('serializeUser', user);
        done(null, user);
    });

    passport.deserializeUser((obj, done) => {
        console.log('deserializeUser', obj)
        done(null, obj);
    });

    passport.use(new GitHubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            process.nextTick(()=> {
                return done(null, profile);
            })
        }
    ));
    // passport.js end */
    
    // Routing
    router.get('/login'
             , (req, res) => res.render('login.html'));
    router.get('/auth/logout'
             , (req, res) => {
                 req.logout();
                 req.redired('/');
             });
    router.get('/auth/github'
             , passport.authenticate('github', { scope: [ 'user:email' ]})
             , (req, res) => {});
    router.get('/auth/github/callback'
             , passport.authenticate('github', { failureRedirect: '/login' })
             , (req, res) => res.redirect('/'));

    return router;
}

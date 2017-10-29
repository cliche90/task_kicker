import express from 'express';
import path from 'path';
import passport from 'passport';
import { Strategy } from 'passport-github2';

module.exports = (app) => {

    app.use(passport.initialize());
    app.use(passport.session());

    const router = express.Router();
    const GitHubStrategy = Strategy;

    // passport.js start
    let GITHUB_CLIENT_ID = "cliche90@naver.com";
    let GITHUB_CLIENT_SECRET = "a";

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((obj, done) => {
        done(null, obj);
    });

    passport.use(new GitHubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "http://localhost:3000/auth/github/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            process.nextTick(()=> {
                return done(null, profile);
            })
        }
    ));
    // passport.js end */

    
    // Routing
    router.get('/'
             , (req, res) => res.render('index.html'));
    router.get('/login'
             , (req, res) => res.render('login.html'));
    router.get('/auth/github'
             , passport.authenticate('github', { scope: [ 'user:email' ]})
             , (req, res) => {});
    router.get('/auth/github/callback'
             , passport.authenticate('github', { failureRedirect: '/login' })
             , (req, res) => res.redirect('/'));

    return router;
}

'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GitHubStrategy = require('passport-github2').Strategy;

module.exports = function (app) {

    app.use(_passport2.default.initialize());
    app.use(_passport2.default.session());

    var router = _express2.default.Router();

    // passport.js start
    var GITHUB_CLIENT_ID = "";
    var GITHUB_CLIENT_SECRET = "";

    _passport2.default.serializeUser(function (user, done) {
        console.log('serializeUser', user);
        done(null, user);
    });

    _passport2.default.deserializeUser(function (obj, done) {
        console.log('deserializeUser', obj);
        done(null, obj);
    });

    _passport2.default.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback"
    }, function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        });
    }));
    // passport.js end */

    // Routing
    router.get('/login', function (req, res) {
        return res.render('login.html');
    });
    router.get('/auth/logout', function (req, res) {
        req.logout();
        req.redired('/');
    });
    router.get('/auth/github', _passport2.default.authenticate('github', { scope: ['user:email'] }), function (req, res) {});
    router.get('/auth/github/callback', _passport2.default.authenticate('github', { failureRedirect: '/login' }), function (req, res) {
        return res.redirect('/');
    });

    return router;
};
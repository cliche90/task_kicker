'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportGithub = require('passport-github2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (app) {

    app.use(_passport2.default.initialize());
    app.use(_passport2.default.session());

    var router = _express2.default.Router();
    var GitHubStrategy = _passportGithub.Strategy;

    // passport.js start
    var GITHUB_CLIENT_ID = "cliche90@naver.com";
    var GITHUB_CLIENT_SECRET = "a";

    _passport2.default.serializeUser(function (user, done) {
        done(null, user);
    });

    _passport2.default.deserializeUser(function (obj, done) {
        done(null, obj);
    });

    _passport2.default.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/github/callback"
    }, function (accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        });
    }));
    // passport.js end */


    // Routing
    router.get('/', function (req, res) {
        return res.render('index.html');
    });
    router.get('/login', function (req, res) {
        return res.render('login.html');
    });
    router.get('/auth/github', _passport2.default.authenticate('github', { scope: ['user:email'] }), function (req, res) {});
    router.get('/auth/github/callback', _passport2.default.authenticate('github', { failureRedirect: '/login' }), function (req, res) {
        return res.redirect('/');
    });

    return router;
};
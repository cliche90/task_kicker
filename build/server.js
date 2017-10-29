'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 3000;
var app = (0, _express2.default)();

app.set('views', _path2.default.join(__dirname, '/../public/'));
app.set('view engine', 'ejs');
app.engine('html', _ejs2.default.renderFile);

app.use(_express2.default.static(_path2.default.join(__dirname, '/../public/')));

var router_with_app = (0, _router2.default)(app);
app.use('/', router_with_app);

app.listen(port, function () {
  return console.log('listen on ' + port);
});
'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _level = require('level');

var _level2 = _interopRequireDefault(_level);

var _util = require('util');

var db = (0, _level2['default'])('links');

db.createReadStream().on('data', function (data) {
  console.log((0, _util.inspect)(data.value));
  console.log(data.key + '=' + (0, _util.inspect)(data.value));
});
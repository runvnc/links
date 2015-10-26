// link.js
'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.save = save;

var _level = require('level');

var _level2 = _interopRequireDefault(_level);

var _bluebird = require('bluebird');

var _shortid = require('shortid');

var db = (0, _level2['default'])('links');
(0, _bluebird.promisifyAll)(db);

function save(link) {
  var id;
  return _regeneratorRuntime.async(function save$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        id = (0, _shortid.generate)();

        link.time = Date.now();
        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(db.put(id, JSON.stringify(link)));

      case 4:
        return context$1$0.abrupt('return', id);

      case 5:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}
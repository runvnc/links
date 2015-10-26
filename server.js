// server.js
'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

var _this = this;

var _link = require('./link');

var _shortrest = require('shortrest');

var _shortrest2 = _interopRequireDefault(_shortrest);

var web = (0, _shortrest2['default'])(8099),
    user = 'test';

web.post('/link', function callee$0$0(req, res) {
  var _req$params, descr, _URL;

  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        _req$params = req.params;
        descr = _req$params.descr;
        _URL = _req$params.URL;
        context$1$0.t0 = res;
        context$1$0.next = 7;
        return _regeneratorRuntime.awrap((0, _link.save)({ descr: descr, URL: _URL, user: user }));

      case 7:
        context$1$0.t1 = context$1$0.sent;
        context$1$0.t0.json.call(context$1$0.t0, context$1$0.t1);
        context$1$0.next = 14;
        break;

      case 11:
        context$1$0.prev = 11;
        context$1$0.t2 = context$1$0['catch'](0);

        res.json({ error: { message: context$1$0.t2.message } });

      case 14:
      case 'end':
        return context$1$0.stop();
    }
  }, null, _this, [[0, 11]]);
});
"use strict";

var _util = require("@firebase/util");

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AuthService = {
  loginWithGoogle: function loginWithGoogle() {
    var provider, userCred;
    return regeneratorRuntime.async(function loginWithGoogle$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            provider = new _app["default"].auth.GoogleAuthProvider();
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_app["default"].auth().signInWithPopup(provider));

          case 4:
            userCred = _context.sent;
            return _context.abrupt("return", {
              user: userCred
            });

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {
              error: _context.t0.message
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  },
  logout: function logout() {
    return regeneratorRuntime.async(function logout$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_app["default"].auth().signOut());

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
"use strict";

var _app = _interopRequireDefault(require("firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var firebaseConfig = {
  apiKey: "AIzaSyC5ut_4yVLD0oFoFZEMLcDYwopGKviSiho",
  authDomain: "kiki-17177.firebaseapp.com",
  databaseURL: "https://kiki-17177-default-rtdb.firebaseio.com",
  projectId: "kiki-17177",
  storageBucket: "kiki-17177.appspot.com",
  messagingSenderId: "158298971097",
  appId: "1:158298971097:web:db121bc535770e22d857c8",
  measurementId: "G-CTF4HXD44K"
}; // Initialize Firebase

if (!_app["default"].getApps.length) {
  _app["default"].initializeApp(firebaseConfig);

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) != undefined) {
    if ("measurementId" in firebaseConfig) {
      _app["default"].analytics();
    }
  }
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _axios2 = _interopRequireDefault(require("../myaxios/axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 导出接口
var login = function login(params) {
  return _axios2["default"].post("admin/login", params)["catch"](function (err) {
    return console.log(err);
  });
};

exports.login = login;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _gatsby = require("gatsby");

var _react = _interopRequireDefault(require("react"));

const ThingLink = ({
  node
}) => _react.default.createElement("li", {
  className: "list-group-item"
}, _react.default.createElement(_gatsby.Link, {
  to: node.fields.slug,
  activeClassName: "active"
}, node.fields.title));

var _default = ThingLink;
exports.default = _default;
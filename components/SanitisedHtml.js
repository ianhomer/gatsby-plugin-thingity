"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _sanitizeHtml = _interopRequireDefault(require("sanitize-html"));

/* eslint react/no-danger:0 */
const ALLOWED_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol', 'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div', 'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre'];

const SanitisedHtml = props => {
  const clazz = props.clazz,
        children = props.children;
  return _react.default.createElement("div", {
    className: clazz,
    dangerouslySetInnerHTML: {
      __html: (0, _sanitizeHtml.default)(children, {
        allowedTags: ALLOWED_TAGS
      })
    }
  });
};

var _default = SanitisedHtml;
exports.default = _default;
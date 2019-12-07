"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.thingQuery = exports.default = void 0;

var _gatsby = require("gatsby");

var _react = _interopRequireDefault(require("react"));

var _SanitisedHtml = _interopRequireDefault(require("../components/SanitisedHtml"));

var _default = props => {
  const data = props.data;
  const markdownRemark = data.markdownRemark;
  const html = markdownRemark.html;
  return _react.default.createElement("section", null, _react.default.createElement("header", null, markdownRemark.fields.title), _react.default.createElement(_SanitisedHtml.default, {
    clazz: "thing-content"
  }, html));
};

exports.default = _default;
const thingQuery = _gatsby.graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        title
      }
    }
  }
`;
exports.thingQuery = thingQuery;
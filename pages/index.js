"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.query = exports.default = void 0;

var _gatsby = require("gatsby");

var _react = _interopRequireDefault(require("react"));

var _ThingLink = _interopRequireDefault(require("../components/ThingLink"));

var _default = ({
  data
}) => {
  const links = data.allMarkdownRemark.edges.map(edge => _react.default.createElement(_ThingLink.default, {
    key: edge.node.id,
    node: edge.node
  }));
  return _react.default.createElement("div", null, links);
};

exports.default = _default;
const query = _gatsby.graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { 
        fields: { 
          slug: { nin: "" } 
        } 
      }
      sort: { fields: [fields___title] }
      limit: 1000
    ) {
      edges {
        node {
          id
          fields {
            slug
            title
          }
        }
      }
    }
  }
`;
exports.query = query;
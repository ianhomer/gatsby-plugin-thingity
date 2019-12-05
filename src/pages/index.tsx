import { graphql } from 'gatsby';
import React from 'react';
import ThingLink from '../components/ThingLink';

export default ({ data }) => {
  const links = data.allMarkdownRemark.edges.map((edge) => (
    <ThingLink key={edge.node.id} node={edge.node} />
  ));
  return (
    <div>
      {links}
    </div>
  );
};

export const query = graphql`
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

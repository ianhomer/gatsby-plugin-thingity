import { graphql } from 'gatsby';
import React from 'react';
import SanitisedHtml from '../components/SanitisedHtml';

export default (props) => {
  const { data } = props;
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  return (
    <section>
      <header>{markdownRemark.fields.title}</header>
      <SanitisedHtml clazz="thing-content">{html}</SanitisedHtml>
    </section>
  );
};

export const thingQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      fields {
        title
      }
    }
  }
`;

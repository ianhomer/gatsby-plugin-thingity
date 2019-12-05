import { Link } from 'gatsby';
import React from 'react';

const ThingLink = ({ node }) => (
  <li className="list-group-item">
    <Link to={node.fields.slug} activeClassName="active">
      {node.fields.title}
    </Link>
  </li>
);

export default ThingLink;

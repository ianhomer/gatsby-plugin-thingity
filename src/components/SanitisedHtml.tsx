/* eslint react/no-danger:0 */
import React from 'react';
import sanitizeHtml from 'sanitize-html';

interface SanitisedHtmlProps {
  clazz: any
  children: any
}

const ALLOWED_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
  'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br', 'div',
  'table', 'thead', 'caption', 'tbody', 'tr', 'th', 'td', 'pre'];
const SanitisedHtml = (props : SanitisedHtmlProps) => {
  const { clazz, children } = props;
  return (
    <div
      className={clazz}
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(children,
          { allowedTags: ALLOWED_TAGS }),
      }}
    />
  );
};

export default SanitisedHtml;

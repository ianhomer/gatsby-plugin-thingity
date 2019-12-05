const { createFilePath } = require(`gatsby-source-filesystem`)

const thingTemplate = require.resolve('./src/templates/thing.tsx')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { 
          order: DESC, fields: [fields___title] 
        }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(`Create Page : ${node.id}` )
      if (node.fields) {
        createPage({
          path: node.fields.slug,
          component: thingTemplate,
          context: {}
        })
      }
    })
  })
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  console.log(`Create Node : ${node.internal.type}` )
  if (node.internal.type === "MarkdownRemark") {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: "content",
      trailingSlash: true
    });
    const stemName = relativeFilePath.match(/.*\/([^\/]*)\/$/)[1];

    createNodeField({
      node,
      name: "title",
      value: node.frontmatter.title || stemName
    });

    createNodeField({
      node,
      name: "slug",
      value: relativeFilePath
    });
  }
};
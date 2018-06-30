const path = require(`path`);



exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allAirtable {
              edges {
                  node {
                      id
                  }
              }
          }
        }
      `
  ).then(result => {
    result.data.allAirtable.edges.forEach(({ node }) => {
        createPage({
          path: node.id,
          component: path.resolve(`./src/templates/product.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: node.id,
          },
        })
      })
        resolve()
      })
    })
  };
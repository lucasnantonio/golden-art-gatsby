const path = require('path');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === 'Airtableprodutos'){
    const slug = node['Código'];
    createNodeField({
        node,
        name: 'slug',
        value: slug,
    })
    }
};

exports.createPages = ({graphql, boundActionCreators}) => {
    const { createPage } = boundActionCreators
    return new Promise ((resolve, reject) => {
        graphql(`
        {allAirtableprodutos{
            edges{
            node{
              fields{
                slug
              }
            }
          }
        }}
    `).then(result => {
        result.data.allAirtableprodutos.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve(`./src/templates/product.js`),
                context: {
                    slug: node.fields.slug
                },
            })
        })
        resolve()
    })
    })
};
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
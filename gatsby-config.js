module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `key8KIoDLtssz0g54`,
        baseId: `appswoobu90DjfHdO`,
        tableName: `Produtos`,
        tableView: `Ordem do site`,
        queryName: `produtos`,
    }
  }],
}

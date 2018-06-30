import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (data) => (
  <div>
    <h1>Hi people</h1>
    {data.data.allAirtableprodutos.edges.map(({node}, index) => 
       <div key={index}>{node.Nome}</div>
    )
    }
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

export const query = graphql`
query produtos{allAirtableprodutos {
  edges {
    node {
      id
      Linha
      Nome
    }
  }
}}`
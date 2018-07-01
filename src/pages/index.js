import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../components/gallery'

const IndexPage = (data) => (
  <div>
    <h1>Hi people</h1>
    <Gallery data={data}/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage

export const query = graphql`
query produtos{allAirtable {
  edges {
    node {
      id
      Linha
      Nome
    }
  }
}}`
import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../components/gallery'

class IndexPage extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      selectedTab: "essencial",
    }
  }

  changeSelectedTab(linha) {
    this.setState({
      selectedTab: linha,
    })
  }

  filterProducts(linha) {
    const filteredProducts = this.props.data.allAirtable.edges.filter((item) => item.node.Linha == this.state.selectedTab)
    return(filteredProducts)
  }

  render(){
    return(
    <div>
    <h1>Hi people</h1>
    <button onClick={() => this.changeSelectedTab("designlab")}>DesignLab</button>
    <Gallery data={this.filterProducts(this.state.selectedTab)}/>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
    );
  }
}

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
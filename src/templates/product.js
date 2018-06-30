import React from 'react';

export const Template = ({data}) => {
    const {airtable : product} = data;
    return <div> {product.Linha} {product.Nome}</div>;
    
};

export const pageQuery = graphql`
query productById($id: String!){
    airtable(id: { eq: $id }){
        Linha
        id
        Nome
    }
  }
`;

export default Template;
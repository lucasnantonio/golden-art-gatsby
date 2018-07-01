import React from 'react'
import Link from 'gatsby-link'

const GalleryThumbnail = (props) => (
    <Link to={"produtos/"+ props.product.id}>
        {console.log(props.product.Fotos)}
        <h1>
            {props.product.Nome}
        </h1>
            <img 
                 src={props.product.Fotos && 
                      props.product.Fotos[0].thumbnails &&
                      props.product.Fotos[0].thumbnails.large &&
                      props.product.Fotos[0].thumbnails.large.url}></img>
        
    </Link>
)

export default GalleryThumbnail
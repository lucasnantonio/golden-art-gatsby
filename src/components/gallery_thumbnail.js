import React from 'react'
import Link from 'gatsby-link'

const GalleryThumbnail = (props) => (
    <Link to={"produtos/"+ props.product.id}>
        <h1>
            {props.product.Nome}
        </h1>
    </Link>
)

export default GalleryThumbnail
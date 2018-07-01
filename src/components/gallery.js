import React from 'react'
import GalleryThumbnail from '../components/gallery_thumbnail'

const Gallery = (props) => (
       
    <div>
        {props.data.map(({node}, index) => 
       <GalleryThumbnail key={index} product={node} />)}
    </div>
)

export default Gallery;
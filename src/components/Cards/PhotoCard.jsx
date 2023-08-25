import React, { useEffect } from 'react'
import getImageHeight from '../../helpers/ImageHeight'

const PhotoCard = ({ item }) => {
    console.log(item, 'item')
    return (
        <div className="grid">
            <img alt="" src={item?.urls.regular} />
        </div>
    )
}

export default PhotoCard
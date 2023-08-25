import React from 'react'
import { Link } from 'react-router-dom'

const Category = ({ currentCategory, item, setSelectedCat }) => {
    return (
        <li onClick={() => setSelectedCat(item?.id)} className={`item`}>
            <Link className={`${currentCategory === item?.id ? "active" : ''}`}>{item?.name}</Link>
        </li>
    )
}

export default Category
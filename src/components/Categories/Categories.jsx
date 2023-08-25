import React, { useState } from 'react'
import "./categories.css"
import { Link } from 'react-router-dom'
import Category from './Category'
const Categories = () => {
    const [selectedCat, setSelectedCat] = useState('all')
    let categories = [
        {
            id: 1,
            name: 'Flower'
        },
        {
            id: 2,
            name: 'Nature'
        }
    ]
    return (
        <ul className='categories'>
            <li className={`item`} onClick={() => setSelectedCat('all')}>
                <Link className={`${selectedCat === 'all' ? "active" : ''}`}>All</Link>
            </li>
            {categories.map(cat => (
                <Category setSelectedCat={setSelectedCat} key={cat?.id} item={cat} currentCategory={selectedCat} />
            ))}

        </ul>
    )
}

export default Categories
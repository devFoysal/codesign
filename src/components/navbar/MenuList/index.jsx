import React from 'react'
import "./menulist.css"
import { NavLink } from 'react-router-dom'

const MenuList = () => {
    return (
        <nav>
            <ul className='menu-items'>
                <li className='item'>
                    <NavLink to="/" className="item-link">
                        Explore
                    </NavLink>
                </li>
                <li className='item'>
                    <NavLink to="/test" className="item-link">
                        Explore
                    </NavLink>
                </li>

                <li className='item'>
                    <NavLink to="/test-2" className="item-link">
                        Explore
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MenuList
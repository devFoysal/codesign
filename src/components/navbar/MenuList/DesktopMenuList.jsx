import React from 'react'
import "./menulist.css"
import { NavLink } from 'react-router-dom'
import { Dots } from '../../../libs/Icons/Dots'
import SocialMediaLink from '../../common/Copyright/SocialMediaLink'
import Button from '../../ui/button/Button'
import VerticalDivider from '../../common/VerticalDivider'

const DesktopMenuList = () => {
    return (
        <nav className='desktop-menu-list'>
            <ul className='menu-items'>
                <li className='item'>
                    <NavLink to="/" className="item-link">
                        Explore
                    </NavLink>
                </li>
                <li className='item'>
                    <NavLink to="/test" className="item-link">
                        Discover
                    </NavLink>
                </li>

                <li className='item'>
                    <NavLink to="/test" className="item-link">
                        For Professionals
                    </NavLink>
                </li>

                <li className='item dots'>
                    <Dots />
                    <ul className='dropdown'>
                        <li className='item'>
                            <NavLink to="/test" className="item-link">
                                About Click Motto
                            </NavLink>
                        </li>
                        <li className='item'>
                            <NavLink to="/test" className="item-link">
                                Pricing
                            </NavLink>
                        </li>
                        <li className='item'>
                            <NavLink to="/test" className="item-link">
                                License
                            </NavLink>
                        </li>
                        <li className='item'>
                            <NavLink to="/test" className="item-link">
                                Partnerships
                            </NavLink>
                        </li>
                        <li className='item'>
                            <NavLink to="/test" className="item-link">
                                Blog
                            </NavLink>
                        </li>
                        <li className='item'>
                            <NavLink to="/test" className="item-link">
                                Help
                            </NavLink>
                        </li>
                        <li className='item'>
                            <NavLink to="/test" className="item-link">
                                Join The Team
                            </NavLink>
                        </li>
                        <li className='item'>
                            <SocialMediaLink />
                        </li>
                    </ul>
                </li>
                <li className='item'>
                    <Button title="Submit Photos" type="outline" link="#" />
                </li>

                <VerticalDivider/>

                <li className='item'>
                    <NavLink to="/test" className="item-link">
                        Login
                    </NavLink>
                </li>
                <li className='item'>
                    <Button title="Join Free" link="#" />
                </li>
            </ul>

        </nav>
    )
}

export default DesktopMenuList
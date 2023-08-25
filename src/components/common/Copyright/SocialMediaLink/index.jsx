import React from 'react'
import { Link } from 'react-router-dom'
import Facebook from '../../../../libs/Icons/Facebook'
import Twitter from '../../../../libs/Icons/Twitter'
import Instagram from '../../../../libs/Icons/Instagram'
import Pinterest from '../../../../libs/Icons/Pinterest'
import Vivo from '../../../../libs/Icons/Vivo'
import Medium from '../../../../libs/Icons/Medium'
import "./sociallink.css"

const SocialMediaLink = () => {
    return (
        <ul className='social-media-links'>
            <li className='social-item'>
                <Link to="/facebook" className="social-item-link">
                    <Facebook />
                </Link>
            </li>
            <li className='social-item'>
                <Link to="/twitter" className="social-item-link">
                    <Twitter />
                </Link>
            </li>
            <li className='social-item'>
                <Link to="/instagram" className="social-item-link">
                    <Instagram />
                </Link>
            </li>
            <li className='social-item'>
                <Link to="/pinterest" className="social-item-link">
                    <Pinterest />
                </Link>
            </li>
            <li className='social-item'>
                <Link to="/vivo" className="social-item-link">
                    <Vivo />
                </Link>
            </li>
            <li className='social-item'>
                <Link to="/medium" className="social-item-link">
                    <Medium />
                </Link>
            </li>
        </ul>
    )
}

export default SocialMediaLink
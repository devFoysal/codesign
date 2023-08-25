import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css"

const Button = ({ title, type = "fill", link, onClick }) => {
    return (
        <>
            {link && (<Link to={link} className={`btn btn-${type}`}>{title}</Link>)}
            {onClick && (<Link onClick={onClick} className={`btn btn-${type}`}>{title}</Link>)}

        </>
    )
}

export default Button
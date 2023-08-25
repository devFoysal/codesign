import React from 'react'
import "./searchbar.css"
import SearchIcon from '../../libs/Icons/SearchIcon'

const SearchBar = ({ title, subTitle }) => {
    return (
        <div className='search-bar'>
            {title && <h1 className='title'>{title}</h1>}
            <form>
                <div className="input-group">
                    <input name='search' id='search' placeholder='Search photos and videos' />
                    <div className='search-svg'>
                        <SearchIcon />
                    </div>
                </div>
            </form>
            {subTitle && <p className='subtitle'>{subTitle}</p>}
        </div>
    )
}

export default SearchBar
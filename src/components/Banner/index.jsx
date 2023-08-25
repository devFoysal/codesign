import React from 'react'
import Image from "../../constant/Images"
import SearchBar from '../SearchBar'
import "./banner.css"

const Banner = () => {
    return (
        <div className='banner-wrapper'>
            <img src={Image.SearchBanner} alt="" />
            <div className='search'>
                <SearchBar title="Your local source of high quality images
and videos directly from their creators" subTitle="Recommended:
summer, food, covid-19, real estate, love"/>
            </div>
        </div>
    )
}

export default Banner
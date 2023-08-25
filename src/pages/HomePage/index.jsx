import React from 'react'
import Banner from '../../components/Banner';
import Masonry from '../../components/Home/Masonry';
import Categories from '../../components/Categories/Categories';

const HomePage = () => {

    return (
        <div>
            <Banner />

            <div className="category">
                <Categories />
            </div>
            <div className="container">
                <Masonry />
            </div>
        </div>
    )
}

export default HomePage
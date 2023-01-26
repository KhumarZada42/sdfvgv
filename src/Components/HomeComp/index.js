
import React from 'react'
import ShopIsFun from './ShopIsFun'
import Trending from './Trending'
import WinterSale from './WinterSale'
import BestSeller from './BestSeller'
import News from './News'

function HomeComp() {
    return (
        <div>
            <ShopIsFun />
            <Trending />
            <WinterSale />
            <BestSeller />
            <News />
        </div>
    )
}

export default HomeComp



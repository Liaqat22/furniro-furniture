import React from 'react'
import OurProducts from '../homeItems/OurProducts'
import RoomInspirations from '../homeItems/RoomInspirations'
import FuniroFunriture from '../homeItems/FuniroFunriture'
import BrowseRange from '../homeItems/BrowseRange'
import NewArrival from '../homeItems/NewArrival'

function Home() {

    return (
        <div className='flex gap-5 flex-col'>
            <NewArrival/>
            <BrowseRange/>
            <OurProducts />
            <RoomInspirations />
            <FuniroFunriture/>
        </div>
    )
}

export default Home
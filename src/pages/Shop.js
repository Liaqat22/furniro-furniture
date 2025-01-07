import React from 'react'
import Hero from '../shopItems/Hero'
import Services from '../shopItems/Services'

function Shop() {
    return (
        <>
            <div className='flex gap-5 flex-col'>
                <Hero />
                <Services/>
            </div>
        </>
    )
}

export default Shop
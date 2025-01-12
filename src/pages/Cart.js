import React from 'react'
import Services from '../shopItems/Services'
import CartHero from '../cartItems/CartHero'

function Cart() {
    return (
        <div className='flex gap-5 flex-col'>
            <CartHero />
            <Services />
        </div>
    )
}

export default Cart
import React from 'react'
import Services from '../shopItems/Services'
import CheckoutHero from '../checkoutItems/CheckoutHero'

function Checkout() {
    return (
        <div className='flex gap-5 flex-col'>
            <CheckoutHero />
            <Services />
        </div>
    )
}

export default Checkout
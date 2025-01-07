import React from 'react'

function ProductDetails() {
    return (
        <>
            <section className='flex gap-3 flex-col'>
                <div className='item-details'>
                    <h1 className='text-4xl capitalize font-semibold'>Asgaard sofa</h1>
                    <p className='text-graytext text-2xl font-medium mb-0 capitalize'>Rs. 250,000.00</p>
                </div>
                <div className='stars flex !gap-4 items-center'>
                    <div className='icon-star flex gap-1'>
                        <i className='fas text-[#FFC700] fa-star' />
                        <i className='fas text-[#FFC700] fa-star' />
                        <i className='fas text-[#FFC700] fa-star' />
                        <i className='fas text-[#FFC700] fa-star' />
                        <i className='fas text-[#FFC700] fa-star-half' />
                    </div>
                    <div class="w-[1px] h-6 bg-gray-400"></div>
                    <p className='text-graytext font-medium text-sm mb-0 capitalize'>5 Customer Review</p>
                </div>

                <p className='mb-0 text-justify'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </p>
            </section>
        </>
    )
}

export default ProductDetails
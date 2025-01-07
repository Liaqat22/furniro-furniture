import React from 'react'
import SingleHero from '../singleProduct/SingleHero'
import Discripton from '../singleProduct/Discripton'
import RelatedProducts from '../singleProduct/RelatedProducts'

function SingleProduct() {
  return (
    <div className='flex gap-5 flex-col'>
      <SingleHero/>
      <hr />
      <Discripton/>
      <hr />
      <RelatedProducts/>
            </div>
  )
}

export default SingleProduct
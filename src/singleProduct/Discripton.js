import { Grid2 } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Discripton() {
  return (
    <div className='main'>
    <div className = "container flex flex-col gap-4">
        <div className='flex flex-row  justify-evenly text-center items-center'>
            <NavLink className='no-underline capitalize text-graytext font-semibold current:text-textblack active'>Discripton</NavLink>
            <NavLink className='no-underline capitalize text-graytext font-semibold'>Additional Information</NavLink>
            <NavLink className='no-underline capitalize text-graytext font-semibold'>reviews [5]</NavLink>
           
        </div>
        <div className='text flex flex-col gap-3'>
            <p className='mb-0 text-graytext text-justify'>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
            <p className='mb-0 text-graytext text-justify'>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
      
    </div>
    <div className='container-fluid '>
        <Grid2 container spacing={2} columns={12}>
        <Grid2 size = {{xs:12 , sm : 6 , md : 6}} className="flex justify-center">
        <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1736158451/Group_106_ywmeq6.png' alt='' className=' bg-bgpink rounded-lg' />
        </Grid2>
        <Grid2 size = {{xs:12 , sm : 6 , md : 6}} className="flex justify-center">
        <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1736158433/Mask_group_2_wkq61f.png' alt='' className=' bg-bgpink rounded-lg' />
        </Grid2>
    </Grid2>

        </div>
    </div>
  )
}

export default Discripton
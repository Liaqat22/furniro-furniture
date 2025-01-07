import { Grid2, Typography } from '@mui/material'
import React from 'react'

function BrowseRange() {
    const images = [
        {pic : "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735813041/Mask_Group_c6l5ij.png",text : "dining"},
        {pic : "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735813038/Image-living_room_pbsgqq.png",text : "living"},
        {pic : "https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735813039/Mask_Group_1_esvkzk.png",text : "bedroom"},
        
    ];
  return (
    <>
      <div className='text-center mt-3 '>
    <Typography variant='h4' gutterBottom className='text-center !font-black'>Browse The Range</Typography>
    <Typography variant='body1' className='text-center !font-bold text-[#616161]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
</div>
          <div className='container'>
<Grid2 container spacing={1.5} columns={12}>
    {images.map((p , i)=>(

    <Grid2 size = {{xs:12 ,md:4 , lg:4}} key={i} className = " mt-3">
        <div className='flex flex-col gap-3'>
        <img src={p.pic} alt='.' className='h-full w-full object-contain rounded-xl'/>
        <Typography  className='text-center !text-xl capitalize !font-bold text-black'>{p.text}</Typography>
        </div>
    </Grid2>
    ))}
</Grid2>
    </div>
    </>
  )
}

export default BrowseRange
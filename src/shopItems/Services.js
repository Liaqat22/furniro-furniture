import { Grid2 } from '@mui/material';
import React from 'react'

function Services() {
    const data = [
        { icon: "fas fa-star", primary: "High Quality", secondary: "crafted from top materials" },
        { icon: "fas fa-shield-alt", primary: "Warranty Protection", secondary: "Over 2 years" },
        { icon: "fas fa-shipping-fast", primary: "Free Shipping", secondary: "Order over 150 $" },
        { icon: "fas fa-headset", primary: "24 / 7 Support", secondary: "Dedicated support" },
    ];
    
  return (
    <>
    <div className='bg-bgpink min-h-40 flex flex-col justify-center p-8'>
        <Grid2 container spacing={2} columns={12} >
            {data?.map((d , i)=>(

        <Grid2 size = {{sx:12 ,sm:6,md:3}}  key={i} mt={2} mb={2}>
            <div className='flex justify-center items-center gap-4 '>
            <i className={`${d?.icon} text-4xl`}/>
            <div className='text'>
                <p className='mb-0 text-xl text-textblack font-bold '>{d?.primary}</p>
                <p className='mb-0 text-sm text-graytext'>{d?.secondary}</p>
            </div>
            </div>
        </Grid2>
            ))}
        </Grid2>
    </div>
    </>
  )
}

export default Services

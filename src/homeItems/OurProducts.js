import {  Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function OurProducts() {
    const [source, setSource] = useState([])
    const handleApi = async () => {
        try {
            const { data } = await axios.get('https://dummyjson.com/products')
            setSource(data?.products)
        } catch (error) {
            console.log(error, "error")
        }

    }
    useEffect(() => {
        handleApi()
    },[])
  return (
<>
<div className='text-center flex flex-col gap-4'>
    <Typography variant='h4' className='text-center !font-black capitalize'>our Products</Typography>
</div>
<div className='container'>
<Grid2 container spacing={2} columns={12}>
    {source?.slice(0, 4).map((p) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} className=' mt-3 !cursor-pointer' key={p?.id}>

            <div className='relative overflow-hidden card-col'>
                <NavLink to ="/singleproduct" className='no-underline  hoverstyling absolute inset-0 bg-black/50 z-10 flex justify-center  items-center'>
                    <div className=' flex justify-between flex-col gap-2 items-center w-full'>
                        <button className='bg-white px-3 py-2 text-[#B88E2F] font-bold min-w-[70%]'>Add to cart</button>

                        <div className='flex justify-between items-center mt-2 w-full px-3'>
                            <button className=' text-[#FFFFFF] '>
                                <i className='fas fa-share' /> <span>share</span>
                            </button>
                            <button className=' text-[#FFFFFF] '>
                                <i className='fas fa-exchange-alt' /> <span>Compare</span>
                            </button>
                            <button className=' text-[#FFFFFF] '>
                                <i className='fas fa-heart' /> <span>Like</span>
                            </button>
                        </div>

                    </div>
                </NavLink>
                <Card className='  relative'>
                    <div className='absolute inset-0 flex justify-end p-3'>
                        <div className=' bg-[#2EC1AC] rounded-full  flex justify-center w-[50px] h-[50px]  items-center'>
                            <p className='text-white mb-0'>New</p>
                        </div>
                    </div>
                    <CardMedia
                        component="img"
                        height="140"
                        image={p?.thumbnail}
                        alt="Thumbnail"
                        loading="lazy" />
                    <CardContent className='bg-[#F4F5F7] '>
                        <p className='text-[#3A3A3A] text-[1.2rem] font-semibold'>{p?.title?.substring(0, 20)}.</p>
                        <p className='text-[#898989]'>{p?.category}</p>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='text-sm font-semibold'>Rp 2.500.000</p>
                            <p className='text-[#898989] text-sm'>Rp 3.500.000</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </Grid2>
    ))}
</Grid2>
</div>
<div className='text-center '>
    <button className='bg-white px-4 py-2 text-[#B88E2F] border-[#B88E2F] border-1 font-bold min-w-[20%]'>Show More</button>
</div>
</>
    )
}

export default OurProducts
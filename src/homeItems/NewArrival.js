import { Typography } from '@mui/material'
import React from 'react'

function NewArrival() {
    return (
        <>

            <div className='flex justify-end items-center px-4 py-2 h-[615px]  bg-[url(https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735662463/scandinavian-interior-mockup-wall-decal-background_1_luyyfm.jpg)] bg-cover bg-center bg-no-repeat'>
                    <div className=' bg-[#FFF3E3] min-h-[350px] w-[643px] p-4  flex items-center flex-col justify-center'>
                        <div className='flex  flex-col gap-4  '>
                        <p className='mb-1 !font-bold text-[#333333]'>New Arrival</p>
                        <div>
                        <Typography gutterBottom className=" !text-3xl text-[#B88E2F] !font-black">Discover Our New Collection</Typography>
                        <Typography className=" text-orange-900 !text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</Typography>
                        </div>
                        <div>
                            <button className='text-white p-3 bg-lightgoldbg font-bold min-w-[60%] lg:min-w-[30%] sm:min-w-[30%] uppercase'>Buy now</button>
                            </div>
                        </div>
                    </div>
                {/* <img src='https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee' alt='-' className='h-auto w-full object-contain relative'/> */}
            </div>
        </>
    )
}

export default NewArrival
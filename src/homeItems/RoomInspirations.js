import { Grid2 } from '@mui/material';
import React from 'react';
import Slider from './Slider';

function RoomInspirations() {


    return (
        <>
            <Grid2 container spacing={1.5} columns={12} className="!bg-[#FCF8F3]  py-4 px-2 !overflow-hidden">

                {/* 1ST GRID */}
                <Grid2 size={{ xs: 12, sm: 12, md: 4 }} className="flex  items-center ">
                    <div className='px-3 py-2 flex flex-col gap-3'>
                        <div >
                            <p className='!text-4xl !font-bold text-balance'>50+ Beautiful rooms inspiration </p>
                            <p className='font-medium text-[#616161] '>Our designer already made a lot of beautiful prototipe of rooms that inspire you </p>
                        </div>
                        <div >
                            <button className='text-white px-3 py-2 bg-lightgoldbg font-semibold min-w-[40%]'>Explore More</button>
                        </div>
                    </div>
                </Grid2>


                {/* MIDDILE GRID */}
                <Grid2 size={{ xs: 12, sm: 7, md: 4 }} >
                    <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735838355/Rectangle_24_hejxfc.png' alt='.' className='h-[auto] w-[100%] object-contain' />
                </Grid2>

                {/* SLIDER */}
                <Grid2 size={{ xs: 12, sm: 5, md: 4 }} className=" flex gap-4 flex-col ">
                    <Slider />
                </Grid2>
                
            </Grid2>
        </>
    );
}

export default RoomInspirations;

import { Breadcrumbs, Grid2 } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Products from './Products'

function Hero() {
    return (
        <section className='flex flex-col gap-4'>
            <div className='flex justify-center items-center relative'>
                <div className='image relative'>
                    <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735919666/Rectangle_1_ba8pfn.png' alt='shopimg' className='sx:min-h-[11rem] lg:h-auto md:h-auto xl:h-auto sm:h-auto' />
                </div>
                <div className='absolute  flex flex-col gap-2'>
                    <div className='flex justify-center'>
                        <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735662363/Meubel_House_Logos-05-0_xvo9rt.png' alt='logo' className='w-[60px] h-auto' />
                    </div>
                    <h1 className='capitalize text-4xl text-center '>shop</h1>
                    <Breadcrumbs aria-label="breadcrumb">
                        <NavLink className="no-underline capitalize text-lg text-textblack font-semibold" to="/"> home </NavLink>
                        <NavLink className="no-underline capitalize text-textblack font-medium " to="/shop"> shop </NavLink>
                    </Breadcrumbs>
                </div>
            </div>
            <section className='container-fluid  !py-6 bg-bgpink'>
                <Grid2 container spacing={2} columns={12}>
                    <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                        <div className='flex !gap-8 items-center justify-center'>

                            <section className='flex !gap-5 items-center'>
                                <div className='flex flex-row gap-3 items-center'>
                                    <i className="fas fa-sliders-h text-lg" />
                                    <p className='capitalize mb-0 text-lg textblack font-medium'>filter</p>
                                </div>

                                <i className="fas fa-qrcode text-lg" />
                                <i className="fas fa-tv text-lg" />
                            </section>
                            <div class="w-[2px] h-8 bg-gray-400"></div>

                            <section>
                                <p className='mb-0  text-textblack font-medium'>Showing 1–16 of 32 results</p>
                            </section>

                        </div>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                        <section className='flex !gap-8 justify-center items-center'>
                            <section className='flex !gap-3 items-center'>
                                <p className='capitalize mb-0 text-lg text-textblack font-medium'>show</p>
                                <div className=' min-h-10 bg-[#FFFFFF] flex justify-center items-center !px-4 !py-2'>
                                    <p className='capitalize mb-0 text-lg text-graytext font-medium'>16</p>
                                </div>
                            </section>
                            <section className='flex !gap-3 items-center'>
                                <p className=' mb-0 text-lg text-textblack font-medium'>Sort by</p>
                                <div className='lg:min-w-48 sm:min-w-48 min-h-10 bg-[#FFFFFF] flex justify-center items-center !px-4 !py-2'>
                                    <p className='capitalize mb-0 text-lg text-graytext font-medium'>default</p>
                                </div>
                            </section>


                        </section>
                    </Grid2>

                </Grid2>
            </section>

            <section>
                <Products />
            </section>
        </section>
    )
}

export default Hero
import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Aboutus from './Aboutus'

function AboutHero() {
    return (
        <>
            <section className='flex flex-col gap-4'>

                <div className='flex justify-center items-center relative'>
                    <div className='image relative'>
                        <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735919666/Rectangle_1_ba8pfn.png' alt='shopimg' className='sx:min-h-[11rem] lg:h-auto md:h-auto xl:h-auto sm:h-auto' />
                    </div>
                    <div className='absolute  flex flex-col gap-2'>
                        <div className='flex justify-center'>
                            <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1735662363/Meubel_House_Logos-05-0_xvo9rt.png' alt='logo' className='w-[60px] h-auto' />
                        </div>
                        <h1 className='capitalize text-4xl text-center '>about</h1>
                        <Breadcrumbs aria-label="breadcrumb">
                            <NavLink className="no-underline capitalize text-lg text-textblack font-semibold" to="/"> home </NavLink>
                            <NavLink className="no-underline capitalize text-textblack font-medium " to="/about"> about </NavLink>
                        </Breadcrumbs>
                    </div>
                </div>
<Aboutus/>
            </section>
        </>
    )
}

export default AboutHero
import { Breadcrumbs, Grid2 } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import SizeColors from './SizeColors'
import ProductDetails from './ProductDetails'

function SingleHero() {
    const details = [
        { title: "sku", value: "SS001" },
        { title: "category", value: "sofas" },
        { title: "tags", value: "Sofa, Chair, Home, Shop" },
    ]
    return (
        <div>
            <section className='  !py-6 bg-bgpink'>
                <div className='flex gap-6 items-center container'>
                    <Breadcrumbs aria-label="breadcrumb" className="flex !flex-nowrap">
                        <NavLink className="no-underline capitalize text-[1.1rem] text-graytext font-semibold" to="/"> home </NavLink>
                        <NavLink className="no-underline capitalize text-graytext font-medium " to="/"> shop </NavLink>
                    </Breadcrumbs>
                    <div class="w-[2px] h-8 bg-gray-400"></div>
                    <p className='text-textblack mb-0 capitalize font-medium whitespace-nowrap'>Asgaard sofa</p>
                </div>
            </section>
            <div className='container'>
                <Grid2 container spacing={2} columns={12}
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid2 size={{ xs: 12, sm: 12, md: 5 }} mt={2} mb={2}>
                        <div className='flex gap-4 justify-center sx:flex-wrap-reverse md:flex-col-reverse xl:flex-row  '>
                            <div className='img-group flex gap-4  xl:flex-col  sx:flex-row sx:flex-wrap '>
                                <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1736158651/Mask_group_3_beascy.png' alt='' className='w-16 h-16 bg-bgpink rounded-lg' />
                                <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1736158651/Mask_group_3_beascy.png' alt='' className='w-16 h-16 bg-bgpink rounded-lg' />
                                <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1736158651/Mask_group_3_beascy.png' alt='' className='w-16 h-16 bg-bgpink rounded-lg' />
                                <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1736158651/Mask_group_3_beascy.png' alt='' className='w-16 h-16 bg-bgpink rounded-lg' />
                               
                            </div>
                            <div className='flex justify-center'>
                            <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1736158631/Asgaard_sofa_3_on8dpp.png' alt='' className='  w-[18rem] bg-bgpink rounded-lg' />
                            </div>

                        </div>
                    </Grid2>
                    <Grid2 size={{ xs: 12, sm: 12, md: 6 }} mt={2} mb={2}>
                        <section className='flex gap-10 flex-col'>
                            <div className='flex flex-col gap-4'>
                                <ProductDetails />
                                <SizeColors />
                            </div>
                            <hr />
                            <section>
                                {details.map((d, i) => (

                                    <div className='listitems flex gap-3 flex-row mt-2 mb-2' key={i}>

                                        <div className='flex justify-between flex-row w-20'>
                                            <p className='mb-0 text-graytext  capitalize'>{d.title}</p>
                                            <p className='mb-0 text-graytext '>:</p>
                                        </div>
                                        <p className='mb-0 text-graytext capitalize'>{d.value}</p>
                                    </div>
                                ))}
                                <div className='share flex gap-3 flex-row mt-2 mb-2'>
                                    <div className='flex justify-between flex-row w-20'>
                                        <p className='mb-0 text-graytext  capitalize'>share</p>
                                        <p className='mb-0 text-graytext '>:</p>
                                    </div>
                                    <div className='icons  flex gap-3 items-center'>
                                        {/* Email Icon with mailto link */}
                                        <i className="fas fa-envelope text-textblack text-lg cursor-pointer" />
                                        <i className="fab text-textblack text-lg fa-linkedin cursor-pointer " />
                                        <i className="fab fa-facebook text-textblack text-lg cursor-pointer" />
                                        <i className="fab fa-twitter text-textblack text-lg cursor-pointer " />
            
                                    </div>
                                </div>

                            </section>
                        </section>
                    </Grid2>
                </Grid2>
            </div>
        </div>
    )
}

export default SingleHero
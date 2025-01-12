import { Card, CardContent, CardMedia, Grid2, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { allProducts } from '../productdata/data'

function RelatedProducts() {

  return (
<>
<div className='text-center flex flex-col gap-4'>
    <Typography variant='h4' className='text-center !font-black capitalize'>related Products</Typography>
</div>
<div className='container'>
<Grid2 container spacing={2} columns={12}>
    {allProducts?.slice(0, 4).map((p) => (
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
                        {p.discountPercentage && <>
                            <div className={` bg-[#E97171] rounded-full  flex justify-center w-[50px] h-[50px]  items-center`}>
                            <p className='text-white mb-0'>-{p.discountPercentage}%</p>
                        </div>
                        </>}
                        {p.new && <>
                            <div className={` bg-[#2EC1AC] rounded-full  flex justify-center w-[50px] h-[50px]  items-center`}>
                            <p className='text-white mb-0'>{p.new}</p>
                        </div>
                        </>}
                       
                    </div>
                    <CardMedia
                        component="img"
                        // height="140"
                        className='!object-cover !h-[18rem] !w-[100%]'
                        image={p?.img_link}
                        alt="Thumbnail"
                        loading="lazy" />
                      <CardContent className='bg-[#F4F5F7] flex flex-col gap-2'>
                        <p className='text-[#3A3A3A] text-xl font-bold mb-0'>{p?.name?.substring(0, 20)}.</p>
                        <p className='text-[#898989] mb-0 font-semibold'>{p?.type}</p>
                        <div className='flex flex-row justify-between items-center'>
                            <p className='text-xl font-bold mb-0'>Rp {p?.price}</p>
                          {p.discountPercentage && <p className='text-[#898989]  mb-0'><del> Rp {p?.discountedPrice}</del></p>}
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

export default RelatedProducts
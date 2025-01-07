import { Card, CardContent, CardMedia, Grid2, } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Products() {
    const [source, setSource] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageLimit = 8;

    const handleApi = async (page) => {
        try {
            const { data } = await axios.get(`https://dummyjson.com/products?limit=${pageLimit}&skip=${(page - 1) * pageLimit}`);
            setSource(data?.products);
        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        handleApi(currentPage);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex gap-10 flex-col container">
            <Grid2 container spacing={2} columns={12}>
                {source?.map((p) => (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} className=' mt-3 ' key={p?.id}>

                        <div className='relative overflow-hidden card-col'>
                            <div className='hoverstyling absolute inset-0 bg-black/50 z-10 flex justify-center  items-center'>
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
                            </div>
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
            <div className="main-pagination flex gap-4 items-center justify-center">
                {[1, 2, 3].map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`pagination ${currentPage === page ? "active" : ""} pagination min-w-10 min-h-10   current:bg-lightgoldbg current:text-white
                        bg-bgpink rounded-lg flex justify-center items-center !px-4 !py-2 no-underline text-textblack`}
                    >
                        {page}
                    </button>
                ))}
                <button className='pagination min-w-10 min-h-10   current:bg-lightgoldbg current:text-white
                bg-bgpink rounded-lg flex justify-center items-center !px-4 !py-2 no-underline text-textblack'>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Products;

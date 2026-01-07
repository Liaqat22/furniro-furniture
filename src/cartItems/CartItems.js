import { Grid2, List, ListItem, ListItemText,  Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function CartItems() {
    return (
        <div className='container-fluid px-4'>
            <Grid2 container spacing={2} columns={12}>
                <Grid2 size={{ xs: 12, sm: 12, md: 8 }}>
                    <TableContainer >
                        <Table aria-label="simple table" >


                            <TableHead className='bg-bgpink'>
                                <TableRow >
                                    <TableCell className='!font-black capitalize'>Product</TableCell>
                                    <TableCell className='!font-black capitalize'>price</TableCell>
                                    <TableCell className='!font-black capitalize'>quantity</TableCell>
                                    <TableCell className='!font-black capitalize'>subtotal</TableCell>
                                    <TableCell className='!font-black capitalize'></TableCell>


                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>
                                        <div className='flex flex-wrap gap-3 items-center'>
                                            <img src='https://res.cloudinary.com/dc1vhqmg2/image/upload/v1736158651/Mask_group_3_beascy.png' alt='Product' className='w-16 h-16 bg-bgpink rounded-lg shadow-md max-w-full' />
                                            <p className='mb-0 capitalize text-graytext !font-black'>Asgaard sofa</p>
                                        </div>
                                    </TableCell>
                                    <TableCell className='!font-black capitalize !text-graytext !whitespace-nowrap'>Rs. 250,000.00</TableCell>
                                    <TableCell className='!font-black capitalize '>
                                        <div className=' flex justify-center '>
                                            <div className='w-fit border-gray-600 px-2 py-2 border'>
                                                <p className='mb-0 '>1</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className='!font-black capitalize !whitespace-nowrap'>Rs. 250,000.00</TableCell>
                                    <TableCell className='!font-black capitalize'>
                                        <i className='fas fa-trash text-lightgoldbg text-lg' />
                                    </TableCell>

                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid2>

                <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
                    <div className='flex flex-col gap-8 bg-bgpink py-9 h-[25rem] '>
                        <h1 className='text-3xl font-bold text-center'>Cart Totals</h1>
                        <div className='flex flex-col gap-4'>
                            <section className='flex flex-col gap-3 '>
                                <List>
                                    <ListItem className='mui-list-item mt-2 text-textblack text-center'>
                                        <ListItemText><p className="!font-semibold mb-0 text-sm">Subtotal</p></ListItemText>
                                        <ListItemText><p className="!font-black text-sm capitalize !text-graytext mb-0">Rs. 250,000.00</p></ListItemText>
                                    </ListItem>
                                    <ListItem className='mui-list-item mt-2 text-textblack text-center'>
                                        <ListItemText><p className="!font-semibold mb-0 text-sm">Total</p></ListItemText>
                                        <ListItemText><p className="!font-black text-lg capitalize !text-lightgoldbg mb-0">Rs. 250,000.00</p></ListItemText>
                                    </ListItem>
                                </List>
                            </section>

                            <section className='flex justify-center'>
                                <NavLink to="#" className='no-underline text-textblack text-lg font-semibold flex justify-around capitalize items-center border-black border rounded-xl lg:w-60  py-3 h-auto sx:w-40'>
                                    check out
                                </NavLink>
                            </section>
                        </div>
                    </div>
                </Grid2>
            </Grid2>
        </div>
    )
}

export default CartItems

import { Grid2 } from '@mui/material'
import React, { useState } from 'react'
import BillingDetails from './BillingDetails'
import ProductDetails from './ProductDetails'

function CheckOutForm() {
    const [formdata , setFormdata] =useState({
        firstname : "",
        lastname : "",
        country : ""
    })
    const submit = (e) =>{
        e.preventDefault()
        console.log("formdata : " , formdata)
    }
    return (
        <div className='container'>
            <h1>{formdata.country}</h1>
            <form onSubmit={submit}>
            <Grid2 container spacing={2} columns={12} className=" flex  justify-between">
                <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                    <BillingDetails data = {formdata} setdata={setFormdata}/>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 5 }}>
                    <ProductDetails />
                </Grid2>
            </Grid2>
            </form>
        </div>
    )
}

export default CheckOutForm
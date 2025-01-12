import { FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

function ProductDetails() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-3'>
        <List>
          <ListItem>
            <ListItemText className='flex flex-col gap-2'
              primary={<p className="!font-semibold mb-0 text-xl">Product</p>}
              secondary={<p className='mb-0 capitalize text-graytext !font-medium'>Asgaard sofa <span className='font-bold text-textblack'>X</span> 1</p>} />
            <ListItemText className='flex flex-col gap-2 text-end'
              primary={<p className="!font-semibold mb-0 text-xl">Subtotal</p>}
              secondary={<p className='mb-0 capitalize text-textblack !font-medium'>Rs. 250,000.00 </p>} />
          </ListItem>
          <ListItem className='mui-list-item text-textblack '>
            <ListItemText><p className="!font-semibold mb-0 text-sm">Subtotal</p></ListItemText>
            <ListItemText className='text-end'><p className="!font-black text-sm capitalize !text-graytext mb-0">Rs. 250,000.00</p></ListItemText>
          </ListItem>
          <ListItem className='mui-list-item  text-textblack '>
            <ListItemText><p className="!font-semibold mb-0 text-sm">Total</p></ListItemText>
            <ListItemText className='text-end'><p className="!font-black text-lg capitalize !text-lightgoldbg mb-0">Rs. 250,000.00</p></ListItemText>
          </ListItem>


        </List>
        <hr />
        <div className="radio flex flex-col gap-4">

          <RadioGroup value={value} onChange={handleChange} className='flex flex-col gap-3'>
          <div>
           <FormControlLabel value="option1" control={<Radio size="small" color='#00000096' />} label="Direct Bank Transfer" />
            <p className ="mb-0 text-graytext text-justify">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            </div> 
            <FormControlLabel value="option2" control={<Radio size='small' color='#00000096' />} label="Cash On Delivery" />
          </RadioGroup>
          <p className='mb-0 text-textblack text-justify'>
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.
          </p>
        </div>
        </div>
        <div className='flex justify-center'>
        <button type="submit" className='no-underline text-textblack text-lg font-semibold flex justify-around capitalize items-center border-black border rounded-xl lg:w-60  py-3 h-auto sx:w-40'>
          place order
        </button>
        </div>

      </div>
    </>
  )
}

export default ProductDetails
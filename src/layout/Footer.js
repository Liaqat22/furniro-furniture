import { Grid2, TextField, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  const links = [
    { title: "home" },
    { title: "shop" },
    { title: "about" },
    { title: "contact" },
  ]
  const help = [
    { name: "payment options" },
    { name: "returns" },
    { name: "privacy policies" },
  ]
  return (
    <div className='container-fluid flex flex-col gap-4 !px-9'>
      <Grid2 container spacing={2} columns={12}>
        <Grid2 size={{ xs: 12, md: 4 }} mt={3}>
          <div className='flex flex-col gap-4'>
            <h1 className='capitalize  font-black text-2xl'>Funiro.</h1>
            <div>
              <Typography className='!text-graytext'>400 University Drive Suite 200 Coral Gables,</Typography>
              <Typography className='!text-graytext'>FL 33134 USA</Typography>
            </div>
          </div>

        </Grid2>

        <Grid2 size={{ xs: 5, md: 2 }} mt={3}>
          <div className='flex flex-col gap-4'>
            <h1 className='capitalize text-graytext font-semibold text-[1rem]'>links</h1>
            <ul className='p-0 m-0 flex flex-col gap-4   '>
              {links.map((li, i) => (
                <li key={i} className='list-none'>
                  <NavLink className="no-underline capitalize text-[#000000] font-semibold text-[1rem]">{li?.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Grid2>
        <Grid2 size={{ xs: 7, md: 2 }} mt={3}>
          <div className='flex flex-col gap-4'>
            <h1 className='capitalize text-graytext font-semibold text-[1rem]'>help</h1>
            <ul className='p-0 m-0 flex flex-col gap-4   '>
              {help.map((h, i) => (
                <li key={i} className='list-none'>
                  <NavLink className="no-underline capitalize text-[#000000] font-semibold text-[1rem]">{h?.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 3 }} mt={3}>
          <div className='flex flex-col gap-4'>
            <h1 className='capitalize text-graytext font-semibold text-[1rem]'>newsletter</h1>
            <form className='flex flex-row gap-3 '>
              <TextField type='email' variant="standard" placeholder='Enter Your Email Address' className='!border-b  !border-[#000000]' />
              <button type='submit' className='uppercase border-b font-semibold border-[#000000] '>subscribe</button>
            </form>
          </div>

        </Grid2>
      </Grid2>
      <div>
        <hr />
        <p>2025 <span className='text-red-500 font-bold'>Liaqat Ali</span> All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
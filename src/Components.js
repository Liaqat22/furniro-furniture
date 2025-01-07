import { Grid2 } from '@mui/material'
import React from 'react'

function Components() {
  return (
    <>
    grid
    <Grid2 container spacing={2} columns={12}>
        <Grid2 size = {{xs:12 , sm : 6 , md : 6}}></Grid2>
    </Grid2>
    </>
  )
}

export default Components
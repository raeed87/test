import { Button, TextField } from '@mui/material'
import React from 'react'

function Ui() {
  return (
    <>
    <div className='max-w-md mx-auto'>
    <div className='grid gap-5 p-5'>
        <div className='text-3xl align-middle font-bold'>Contact Us</div>
    <div className='text-2xl'>Name</div>
    <TextField id="outlined-basic" label="Enter your name" variant="outlined" />
    <div className='text-2xl'>Email</div>
    <TextField id="outlined-basic" label="Enter your email" variant="outlined" />
    <div className='text-2xl'>Message</div>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue="write your message"
        />
        
        <Button variant="contained" disableElevation>
  Submit
</Button> </div>
</div>

    </>
  )
}

export default Ui
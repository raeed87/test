import { Button, TextField } from '@mui/material'
import React from 'react'

function Login() {
    

  return (
    <>
    <div className='max-w-md mx-auto'>
    <div className='grid gap-5 p-5'>
        <div className='text-3xl align-middle font-bold'>Login</div>
    <div className='text-2xl'>Email</div>
    <TextField id="outlined-basic" label="Enter your mail id" variant="outlined" />
    <div className='text-2xl'>password</div>
    <TextField id="outlined-basic" label="Enter your password" variant="outlined" />

        <Button variant="contained" disableElevation>
  Sign in
</Button> </div>
</div>

    </>
  )
}
export default Login

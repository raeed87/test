import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function Ui() {
  const [formData,setformData]
    = useState({
        name:"",
        email:"",
        password:"",
    })
    const handleChange =()=>{
      
    }    

  return (
    <>
    <div className='max-w-md mx-auto'>
    <div className='grid gap-5 p-5'>
        <div className='text-3xl align-middle font-bold'>Registration</div>
        < div className='text-2xl'>Name</div>
    <TextField id="outlined-basic" label="Enter your Name" variant="outlined" value={formData.name}/>
    <div className='text-2xl'>Email</div>
    <TextField id="outlined-basic" label="Enter your mail id" variant="outlined" value={formData.email} />
    <div className='text-2xl'>password</div>
    <TextField id="outlined-basic" label="Enter your password" variant="outlined"value={formData.password} />
   
        
        <Button variant="contained" disableElevation>
  create account
</Button> </div>
</div>

    </>
  )
}

export default Ui
import { Button } from '@mui/material'
import React, { useState } from 'react'

function State() {
  const[count,setCount]= useState(0)
  return (
    <>
    <p>you clicked {count}  times</p>
    <Button variant="outlined" color="error"
  onClick={()=>{
  setCount(count+1)
  }} > click</Button>
    </>
    
  )
}

export default State
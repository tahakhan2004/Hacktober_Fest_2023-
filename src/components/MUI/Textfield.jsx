import { Button, ButtonGroup, IconButton, Stack, TextField, Typography, InputAdornment } from '@mui/material';
import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Row } from 'react-bootstrap';
import { Password } from '@mui/icons-material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Textfield = () => {
    const[val, setval]= useState("")
  return (
    <>
      <Stack direction={"row"} spacing={3} justifyContent="center" mt={5}>
        <TextField label="Enter Email" variant='outlined'/>
        <TextField label="Enter Email" variant='filled'/>
        <TextField label="Enter Email" variant='standard'/>
      </Stack>
      <Stack direction={"row"} spacing={3} justifyContent="center" mt={2}>
        <TextField label="Small Secondary" size='small' color='secondary'/>
        <TextField label="Form Input" required size='small'/>
        <TextField label="Form Input" type="password" value={val} onChange={(e)=>{setval(e.target.value)}} error={!val} helperText= {!val ? "Required" : "Share your right information"}/>
        <TextField label="Form Input" type="password" disabled helperText="Share your right information"/>
      </Stack>
      <Stack direction={"row"} spacing={3} justifyContent="center" mt={2}>
        <TextField label="Read ONly" InputProps={{readOnly: true} }/>
        <TextField label="Amount" InputProps={{startAdornment: <InputAdornment position='start'>Rs</InputAdornment>,}}/>
        <TextField label="Weight" InputProps={{endAdornment: <InputAdornment position='end'>Kg</InputAdornment>,}}/>
        <TextField label="Password" InputProps={{endAdornment: <InputAdornment position='end'><VisibilityIcon /></InputAdornment>,}}/>
      </Stack>
    </>
  )
}

export default Textfield

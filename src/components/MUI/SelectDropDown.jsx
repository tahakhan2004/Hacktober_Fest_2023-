import { Button, ButtonGroup, IconButton, Stack, TextField, Typography, InputAdornment ,MenuItem} from '@mui/material';
import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Row } from 'react-bootstrap';
import { Password } from '@mui/icons-material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SelectDrop = () => {
    const[val, setval]= useState([])
    console.log(val);
  return (
    <>
      <Stack direction={"row"} spacing={3} width={250} ml={4} mt={2}>
        <TextField label="Country" SelectProps={{multiple:true}} fullWidth select value={val} onChange={(e)=>{setval(e.target.value)}}>
<MenuItem value="PAk">Pakistan</MenuItem>
<MenuItem value="MEDI">Madina</MenuItem>
<MenuItem value="MAKK">Makkah</MenuItem>

        </TextField>

      </Stack>
    </>
  )
}

export default SelectDrop

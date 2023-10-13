import { Button, ButtonGroup, IconButton, Stack, TextField, Typography, InputAdornment ,MenuItem, FormControl, FormControlLabel, RadioGroup, Radio, Box,FormLabel} from '@mui/material';
import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';

import { Password } from '@mui/icons-material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const RadioBtn = () => {
    const[val, setval]= useState("")
    console.log(val);
  return (
    <>
    <Box>
<FormControl>
    <FormLabel>Years od experience</FormLabel>
    <RadioGroup value={val} onChange={(e)=>{setval(e.target.value)}} row>
    <FormControlLabel control={<Radio />} value="0-2" label="0-2"/>
    <FormControlLabel control={<Radio />} value="3-5" label="3-5"/>    
    <FormControlLabel control={<Radio />} value="6-10" label="6-10"/>    
    </RadioGroup>
</FormControl>
    </Box>
    </>
  )
}

export default RadioBtn

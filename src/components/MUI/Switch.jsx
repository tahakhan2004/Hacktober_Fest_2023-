import { Button, ButtonGroup, IconButton, Stack, TextField, Typography, InputAdornment ,MenuItem, FormControl, FormControlLabel, RadioGroup, Radio, Box,FormLabel, Checkbox, FormGroup, Switch} from '@mui/material';
import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
// import { CheckBox, Password } from '@mui/icons-material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const Switche = () => {
    const[val, setval]= useState(false)
    // const [skills, setskills]  = useState([])
    console.log(val);
    // console.log(skills);
  return (
    <>

    <Box>
<FormControlLabel label={val ? "Dark mode" : "light mode"} checked={val} onChange={(e)=>{setval(e.target.checked)}} control={<Switch  color="success" />}/>
    </Box>
    </>
  )
}

export default Switche

import { Button, ButtonGroup, IconButton, Stack, TextField, Typography, InputAdornment ,MenuItem, FormControl, FormControlLabel, RadioGroup, Radio, Box,FormLabel, Checkbox, FormGroup, Switch, Rating, Autocomplete} from '@mui/material';
import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
// import { CheckBox, Password } from '@mui/icons-material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const skills = ["html", "Css", "js", "mui", "react"]
const skilloptions = skills.map((s, i)=>({
  id : i + 1,
  label: s
}))
const AutoComplete = () => {

    const[val, setval]= useState(null)
    const[skil, setskil]= useState(null)
    console.log(skil);
    // console.log({val});

const handelchange =(e,newValue)=>{
    // console.log(newValue);
    setskil(newValue)

}
  return (
    <>
    <Box mt={3}>
{/* <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={skills}
  sx={{ width: 300 }}
  value={val}
  renderInput={(params) => <TextField {...params} label="Skills" />}
  onChange={(e, newValue= "")=>{setval(newValue)}}
  freeSolo
/> */}
<Autocomplete
  disablePortal
  id="combo-box-demo"
  options={skilloptions}
  sx={{ width: 300 }}
  value={skil}
  renderInput={(params) => <TextField {...params} label="Skills" />}
  onChange={handelchange}
/>
</Box>
    
    </>
  )
}

export default AutoComplete

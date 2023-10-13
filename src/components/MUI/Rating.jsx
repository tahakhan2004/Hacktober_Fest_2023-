import { Button, ButtonGroup, IconButton, Stack, TextField, Typography, InputAdornment ,MenuItem, FormControl, FormControlLabel, RadioGroup, Radio, Box,FormLabel, Checkbox, FormGroup, Switch, Rating} from '@mui/material';
import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
// import { CheckBox, Password } from '@mui/icons-material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Skills = {

}
const Ratingsss = () => {

    const[val, setval]= useState(null)
    // const [skills, setskills]  = useState([])
    console.log(val);
    // console.log(skills);
  return (
    <>

    <Stack>
        <Rating value={val} onChange={(e, newValue=0)=>{setval(newValue)}} precision={0.5} />
        <Rating value={val} onChange={(e, newValue=0)=>{setval(newValue)}} precision={0.5} icon={<FavoriteIcon/>} emptyIcon={<FavoriteBorderIcon/>} />
        <Rating value={val} onChange={(e, newValue=0)=>{setval(newValue)}} precision={0.5} icon={<FavoriteIcon color='error'/>} emptyIcon={<FavoriteBorderIcon/>} readOnly/>
        <Rating value={val} onChange={(e, newValue=0)=>{setval(newValue)}} precision={0.5} icon={<FavoriteIcon color='error'/>} emptyIcon={<FavoriteBorderIcon/>} highlightSelectedOnly/>
    </Stack>
    </>
  )
}

export default Ratingsss

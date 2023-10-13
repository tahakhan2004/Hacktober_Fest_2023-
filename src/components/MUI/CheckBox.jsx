import { Button, ButtonGroup, IconButton, Stack, TextField, Typography, InputAdornment ,MenuItem, FormControl, FormControlLabel, RadioGroup, Radio, Box,FormLabel, Checkbox, FormGroup} from '@mui/material';
import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
// import { CheckBox, Password } from '@mui/icons-material';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const CheckBox = () => {
    const[val, setval]= useState(false)
    const [skills, setskills]  = useState([])
    // console.log(val);
    console.log(skills);

    const HandleCheckbox = (event)=>{
        const index = skills.indexOf(event.target.value)
        if(index===-1){
            setskills([...skills, event.target.value])
        }else{
            setskills(skills.filter((skill)=>skill !== event.target.value))
        }
    }
  return (
    <>
    <Box>
   
<FormControlLabel label="Agree to all terms and condition*" checked={val} onChange={(e)=>{setval(e.target.checked)}}  control={<Checkbox />} />

    </Box>
    <Box>
        <Checkbox icon={<BookmarkBorderIcon/>} checkedIcon={<BookmarkIcon/>}/>
    </Box>

    <Box>
        <FormControl>
            <FormLabel>Skills</FormLabel>
            <FormGroup row>
            <FormControlLabel label="HTML" checked={skills.includes("html")} value={"html"} onChange={HandleCheckbox}  control={<Checkbox />} />
            <FormControlLabel value={"css"} checked={skills.includes("css")} label="CSS" onChange={HandleCheckbox}  control={<Checkbox />} />
            <FormControlLabel value={"javascript"} checked={skills.includes("javascript")} label="JavaScript" onChange={HandleCheckbox}  control={<Checkbox />} />
            </FormGroup>
        </FormControl>
    </Box>
    </>
  )
}

export default CheckBox

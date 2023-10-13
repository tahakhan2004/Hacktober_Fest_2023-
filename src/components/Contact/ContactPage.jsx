import { Box, Grid, TextField, Button} from '@mui/material'

import React from 'react'
// import MuiCard from '../MUI/MuiCard'
import MuiConCard from '../MUI/MuicontactCard'
import "./contact.css"
import styled from "styled-components";

// import { makeStyles } from '@mui/styles';




const ContactPage = () => {
  
  const WhiteBorderTextField = styled(TextField)`& label.Mui-focused {
    color: white;
  }
  & .MuiInputLabel-root {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  & .MuiOutlinedInput-input {
    color: white;
  }
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
`;

  return (
    <>
      <Box sx={{ bgcolor: "#314B7C" }}>
        <span className='title1' >Creative Staff</span> 

        <Grid container padding={{md:15, xs:0}}  sx={{ borderRadius: 6 }}>
       {/* <Box> */}
          <Grid container item md={12} lg={7.2} mt={{lg:5}} xs={12} sx={{ bgcolor: "#0C0D29" }} padding={{md:3, xs:3}} spacing={3} order={{xs:-1, md:0, sm:0}}>
            <Grid item md={4} xs={12} sm={6}>
              <MuiConCard name={"ANDREW"} profession={"WRITER/CREATOR"} />
            </Grid>

            <Grid item md={4} xs={12} sm={6}>
              <MuiConCard name={"UJI"} profession={"ARTIST"} />
            </Grid>

            <Grid item md={4} xs={12} sm={6}>
              <MuiConCard name={"ERICK"} profession={"COLORIST"} />
            </Grid>

            <Grid item md={4} xs={12} sm={6} mt={{md:15}}>
              <MuiConCard name={"ANDREW"} profession={"WRITER/CREATOR"} />
            </Grid>

            <Grid item md={4} xs={12} sm={6} mt={{md:15}}>
              <MuiConCard name={"ANDREW"} profession={"WRITER/CREATOR"} />
            </Grid>

            <Grid item md={4} xs={12} sm={6} mt={{md:15}}> 
              <MuiConCard name={"ANDREW"} profession={"WRITER/CREATOR"} />
            </Grid>
          </Grid>

          {/* </Box> */}

          <Grid container item md={12} lg={4.4} xs={12} marginLeft={4.5} alignItems={"center"} >

            <Grid item md={12} xs={12} sm={12} mx={5} mt={{xs:3,lg:0}} mb={{lg:-15}}>
              <WhiteBorderTextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={8}
                sx={{ width: "100%"}}
              
              />

            </Grid>
            <Grid item md={12} xs={12} mx={5} sm={12} mt={{xs:3 ,lg:0}} mb={{lg:-18}}>
              <WhiteBorderTextField label="Enter name" variant='outlined' sx={{ width: "100%" }} />
            </Grid>

            <Grid item md={12} xs={12} mx={5} sm={12} mt={{xs:3, lg:0}} mb={{lg:-10}}>
              <WhiteBorderTextField label="Enter Email" variant='outlined' sx={{ width: "100%" }} />
            </Grid>

            <Grid item md={12} xs={12} mx={5} sm={12} mt={{xs:3, lg:0}} mb={{lg:-13}}>
              <WhiteBorderTextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={8}
                sx={{ width: "100%" }}

              />
            </Grid>
            <Grid item md={12} sx={{textAlign:"center" }} xs={12} mx={5} sm={12} mt={{xs:3, lg:0}} mb={{lg:0, xs:3}}>
  <Button variant='contained' >Send</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ContactPage


 
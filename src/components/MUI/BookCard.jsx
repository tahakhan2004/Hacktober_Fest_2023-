import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
// import "./authorCard.css"
import book1 from "../../images/book1over.png"
import "./bookcard.css"
import Button from '../Buttton/button'
import { Link } from 'react-router-dom'

const BookCard = () => {
  return (
    <>
      <Card sx={{ marginLeft: "auto", marginRight: "auto", color: "", display: 'flex', flexDirection: { md: "row", xs: "column", sm: "column" }, textAlign: { xs: "center", md: "start" }, background: "none", width: "90%", justifyContent: "space-between", alignItems: "center", padding:0}}>


        <Box sx={{ display: 'flex', flexDirection: 'column', order: { xs: 1, md: 0 } }}>
          <CardContent sx={{ justifyContent: "space-evenly", display: "flex", flexDirection: "column", flex: '-1 0 auto', }} data-aos="fade-right">
          <Typography component="div" variant="h5" fontSize={{ xs: 28, sm: 28, md: 20 }} fontWeight={"bold"} fontFamily={"Heebo, sans-serif"} color={"#ff9b02"}>
              Orbital Space
            </Typography>
            <Typography component="div" variant="h5" mt={1.5} fontSize={{ xs: 28, sm: 28, md: 70 , lg:80}} fontWeight={"bold"} fontFamily={"EB Garamond, serif"} color={"#FFFF"}>
              Theft of Fire
            </Typography>
            <Typography variant="subtitle1" color="white" component="div" sx={{ marginTop: { xs: 1.5 }, marginRight: { md: 15 } }}>
            If you want to snatch a priceless alien artifact from the most heavily defended piece of sky in the outer solar system, and get away undetected, your best bet is a team of highly-experienced professionals who work together like the gears of an expensive watch.

            Or you could just send a tramp spacecraft constructed from plans found on internet, and crew it with a failed asteroid miner turned space pirate, a genetically modified - and emotionally unstable - heiress, and a prototype Artificial Intelligence in the midst of a catastrophic identity crisis.

Maybe they won’t murder each other on the way there.
            </Typography>
  
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:{xs:"center", md:"start"}}}>
<a target='_blank' href={"https://t.co/aaVNXJMcxi"}>
            <button class="btnn" type="button" style={{marginTop:25}}>
  <strong>Read Sample</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>
</a>
<Button />
         
</Box>

          </CardContent>
        </Box>
        <CardMedia
        data-aos="fade-left"
          component="img"
          sx={{padding: { md:7 , xs:3  }, width: { md: "750px", xs: "70%", sm: "65%" }, height: { md: "750px", xs: "70%", sm: "65%" }}}
          image={book1}
          alt="Live from space album cover"
        />
      </Card>

    </>
  )
}

export default BookCard

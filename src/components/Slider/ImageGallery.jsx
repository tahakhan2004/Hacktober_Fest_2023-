import React, { useEffect, useState } from 'react'
import "./Slider.css"
import { Box } from '@mui/material'
import axios from 'axios'
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const ImageGallery = () => {
  const [bookdata, setbookData] =  useState([])
  useEffect(()=>{
    axios.get("https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDORJk6iBpWXMktQoWh_zKWEKuye8mgbV4&maxResults=4")
    .then((res)=>{
      setbookData(res.data.items);
    }).catch((err)=>{
      console.log(err);
    })
  } ,[])
  const theme = useTheme();
  return (
    <>
    {/* <div className='main'>
    <Box className='imgSlider' sx={{height: {xs:"40vh",sm:"80vh" ,md: "100vh"}}}>
    </Box>
    </div> */}
    
    {/* {
      bookdata.map((book)=>{
        let thumbnail = book.volumeInfo.imageLinks.thumbnail
        return(
          <div>
             <img src={thumbnail} alt="" />
             <h6>{book.volumeInfo.title}</h6>
             <h6>{book?.volumeInfo.authors[0]}</h6>
          </div>
        )
      })
    } */}

     <Card sx={{ display: 'flex' ,flexDirection:{md: "row", xs:"column", sm:"row"} ,width:{md:"80%", xs:"100%", sm:"100%"},justifyContent:"space-between"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', }}>
        <CardContent sx={{ flex:'1 0 auto', marginTop:{xs: 1 ,md:7 }}}>
          <Typography component="div" variant="h5" fontSize={{xs:28, sm:28, md: 35}} fontWeight={"bold"}>
            About Author Name
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{marginTop:{xs: 1.5}, marginRight:{md:15}}}>
          S. Evan Townsend has been called "America's Unique Speculative Fiction Voice" and writes novels that cause thrills and rapid page-turning. After spending four years in the U.S. Army in the Military …
          </Typography>
          <button className='butnn' style={{marginRight:2, marginTop:15}}>
  <p>ReadMore</p>
  <svg
    strokeWidth={4}
    stroke="currentColor"
    viewBox="0 0 24 24"
    fill="none"
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 5l7 7m0 0l-7 7m7-7H3"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
</button>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: {md:450, xs:"100%", sm:250},height:{md:450, xs:"100%", sm:250} }}
        image="https://sevantownsend.com/wp-content/uploads/2016/03/SEvanTownsend_800x800.jpg"
        alt="Live from space album cover"
      />


    </Card>
 
    </>
  )
}

export default ImageGallery
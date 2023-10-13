import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MuiConCard = ({name, profession}) => {
  return (
    <>
        
    <Card sx={{ maxWidth: 310 , borderRadius:0}}>

      <CardMedia
        sx={{ height: 230}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent sx={{bgcolor:"#0C0D29"}}>
        <Typography gutterBottom variant="h5" component="div" color={"#9D9FBA"}>
          {name}
        </Typography>
        <Typography variant="h6" color={"#9D9FBA"}>
         {profession}
        </Typography>

        <Typography variant="h6" color="gold">
         Email | Twitter
        </Typography>
      </CardContent>
     
    </Card> 
    </>
  )
}

export default MuiConCard

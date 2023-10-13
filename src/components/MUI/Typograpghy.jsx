import { Typography } from '@mui/material';
import React from 'react'

const Typograpghy1 = () => {
  return (
    <>
     <Typography variant="h1">Hello World 1</Typography> 
     <Typography variant="h2">Hello World 2</Typography> 
     <Typography variant="h3" component={"h1"}>Hello World 3</Typography> 
     <Typography variant="h4">Hello World 4</Typography> 
     <Typography variant="h5">Hello World 5</Typography> 
     <Typography variant="h6">Hello World 6</Typography> 
     
     <Typography variant="subtitle1">Sub Title 1</Typography>
     <Typography variant="subtitle2">Sub Title 1</Typography>

     <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel saepe quisquam praesentium, laboriosam nulla architecto illum sed unde a? Sit ipsum reprehenderit, eaque esse est quis deserunt quasi! Eaque, delectus?</Typography>
     <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel saepe quisquam praesentium, laboriosam nulla architecto illum sed unde a? Sit ipsum reprehenderit, eaque esse est quis deserunt quasi! Eaque, delectus?</Typography>


    </>
  )
}

export default Typograpghy1

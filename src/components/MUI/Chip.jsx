import { Avatar, Chip } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useState } from 'react';

const Chips = () => {
    const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])
    const handleDelete = (chipToDelete) => {
      setChips(chips => chips.filter(chip => chip !== chipToDelete))
    }
  return (
    <>
     <Stack flexDirection={"row"}>
    <Chip label="chip1" size='large' color='success' icon={<CatchingPokemonIcon/>}/>    
    <Chip label="Outlined" size='large' color='primary' variant='outlined' avatar={<Avatar>v</Avatar>}/>    
    <Chip label="Delete" size='large' color='error' onClick={()=>{alert("clicked")}} onDelete={()=>alert("deletes")}/>    
{chips.map((chip)=>(
        <Chip label={chip} key={chip} color='error' onDelete={()=>{handleDelete(chip)}}/>    

))}
    </Stack> 
    </>
  )
}

export default Chips

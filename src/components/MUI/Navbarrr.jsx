import { AppBar, Box, Breadcrumbs, Button, Drawer, IconButton, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Stack } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
const Navbarre = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isDraweropen, setisDraweropen] = useState(false)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
     <AppBar position='static'>
    <Toolbar>
    <IconButton>
        <CatchingPokemonIcon/>
    </IconButton>  
    <Typography variant='h6' component="div" sx={{flexGrow:1}}>
        pokemon
    </Typography>     
    <Stack flexDirection={"row"} > 
    <Button  color='inherit'>Features</Button>
    <Button color='inherit'>Features</Button>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon/>}
        color='inherit'
      >
        Dashboard
      </Button>
    <Button color='inherit'>Features</Button>
    </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
 </Toolbar>    
    </AppBar> 

{/* link  */}

{/* <Link underline='none' href='#'>helo</Link> */}

{/* BreadCrump  */}
<Breadcrumbs separator={<ArrowForwardIosIcon fontSize='small'/>} maxItems={3}>
<Link underline='hover' href='#'>Home</Link>
<Link underline='hover' href='#'>asssss</Link>
<Link underline='hover' href='#'>pusss</Link>
<Typography>
  Shoes
</Typography>

</Breadcrumbs>

{/* Drawer  */}
<IconButton size='large' color='inherit' edge="start" onClick={()=>{setisDraweropen(true)}}>
   <MenuIcon />    
</IconButton>
<Drawer anchor='left' open={isDraweropen} onClose={()=>setisDraweropen(false)}>
<Box p={2} width="250px" textAlign="center" role="presentation"><Typography variant='h6' component={"div"}>Side Panel</Typography></Box>
</Drawer>
    </>
  )
}

export default Navbarre

import { Button, ButtonGroup, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import AccessibleIcon from '@mui/icons-material/Accessible';
import { Row } from 'react-bootstrap';

const Buttton = () => {
  return (
    <>
    {/* ,md:"column",xl:"row" */}
    <Stack spacing={2} alignItems="center" direction={{ xs: 'column', sm: 'row' }} justifyContent="center" mt={3}>
  <Button variant='text'>Enter</Button>
  <Button variant='contained'>Enter</Button>

  <Button variant='outlined' href='https://www.youtube.com/watch?v=fgTLgz1xSn8&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=5'>Enter</Button>
  </Stack>

  <Stack spacing={2} alignItems="center" direction={{ xs: 'column', sm: 'row' }} justifyContent="center" mt={3}>
  <Button variant='text' color='primary' size='small'>Enter</Button>
  <Button variant='contained' color='primary' size='medium'>Enter</Button>

  <Button variant='outlined' href='https://www.youtube.com/watch?v=fgTLgz1xSn8&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=5' color='error' size='large'>Enter</Button>
  </Stack>

  <Stack spacing={2} alignItems="center" direction={{ xs: 'column', sm: 'row' }} justifyContent="center" mt={3}>
  <Button variant='text' color='primary' size='small'><AccessibleIcon sx={{fontSize:30}}/> Enter</Button>
  <Button variant='contained' color='primary' size='medium' disableRipple disableElevation>Enter</Button>
  <IconButton color='success'>
  <AccessibleIcon sx={{fontSize:30}}/>
  </IconButton>
  <Button variant='outlined' href='https://www.youtube.com/watch?v=fgTLgz1xSn8&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=5' target={'_blank'} color='error' size='large'>Enter</Button>
  </Stack>

  <Stack direction={"row"} justifyContent="center">
    <ButtonGroup variant='contained' size='medium' color="warning">
        <Button onClick={()=>{alert("First")}}>1</Button>
        <Button>2</Button>
        <Button onClick={()=>{alert("third")}}>3</Button>
    </ButtonGroup>
  </Stack>

{/* CODEEVALUATION VIDEO 6 FOR TOGGLE BUTTON  */}
    </>
  )
}

export default Buttton

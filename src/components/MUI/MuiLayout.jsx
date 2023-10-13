import { Divider, Grid, Stack, Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiLayoutBox = () => {
  return (
    <>
    <Paper sx={{padding:"30px", margin:"15px"}} elevation={4}>
    <Stack sx={{border: "1px solid"}} direction="row" spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
      <Box sx={{bgcolor:"blue", color:"white", height:"100px", width:"100px", padding: "16px", "&:hover":{bgcolor:"lightblue", color:"black"}}}>
        code
      </Box>
      <Box display={"flex"} bgcolor="green" p={2} height={100} width={100}>
     </Box>
    </Stack>


{/* Grid */}

    <Grid container my={4}>
        <Grid item bgcolor={"red"} xs={12} md={6} xl={12} lg={3}>
            <Box padding={2}>Item1</Box>
        </Grid>
        <Grid item bgcolor={"red"} xs={12} md={6} xl={12} lg={3}>
        <Box padding={2}>Item2</Box>
        </Grid>
        <Grid item bgcolor={"red"} xs={12} md={6} xl={12} lg={3}>
        <Box padding={2}>Item3</Box>
        </Grid>
        <Grid item bgcolor={"red"} xs={12} md={6} xl={12} lg={3}>
        <Box padding={2}>Item4</Box>
        </Grid>
    </Grid>

    </Paper>
    </>
  )
}

export default MuiLayoutBox

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'
// import  from '@mui/material/SpeedDialIcon';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
const SpeedDaille = () => {
  return (
    <>
     <SpeedDial
  ariaLabel="SpeedDial basic example"
  sx={{ position: 'absolute', bottom: 16, right: 16 }}
  icon={<SpeedDialIcon />}
>

    <SpeedDialAction
      icon={<SaveIcon/>}
      tooltipTitle={"save"}
    />
       <SpeedDialAction
      icon={<PrintIcon/>}
      tooltipTitle={"Print"}
      tooltipOpen
    /> 
      <SpeedDialAction
    icon={<ShareIcon/>}
    tooltipTitle={"Share"}
  />
</SpeedDial> 
    </>
  )
}

export default SpeedDaille

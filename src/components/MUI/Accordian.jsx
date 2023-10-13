import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';    
const AccordianMui = () => {
  return (
    <>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe repudiandae voluptate tempore quibusdam quos quae, cumque non unde minima reprehenderit ab odit officiis voluptatem sequi illo beatae distinctio, odio dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </>
  )
}

export default AccordianMui

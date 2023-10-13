import { Snackbar } from '@mui/material'
import * as React from 'react';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SnackBar1 = () => {
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
  return (
    <>
    <div>
      <Button onClick={()=>setOpen(true)}>Open simple snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Note archived"
      />

{/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity='success'>
          Form submitted successfully!
        </SnackbarAlert>
      </Snackbar> */}
    </div> 
    </>
  )
}

export default SnackBar1

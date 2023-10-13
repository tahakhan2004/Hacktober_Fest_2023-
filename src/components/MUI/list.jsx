import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Divider,
    ListItemAvatar,
    Avatar
  } from '@mui/material'
  import InboxIcon from '@mui/icons-material/Inbox'
  
 const MuiList = () => {
    return (
        <>
      <Box sx={{ width: '400px', bgcolor: '#efefef' , mt:4}}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemAvatar>
              <Avatar>
                <InboxIcon />
              </Avatar>
            </ListItemAvatar>
              <ListItemText primary='List item 1' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <InboxIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='List item 2' secondary='Secondary text' />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
                <InboxIcon/>
            </ListItemIcon>
            <ListItemText primary='List item 3' />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      </>
    )
  }
  export default MuiList
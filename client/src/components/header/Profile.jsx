import { Typography ,Menu,MenuItem,makeStyles, Box} from '@material-ui/core'
import React, { useState } from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyle=makeStyles({
    component:{
        marginTop:30,
        cursor:"pointer"
    },
    logout:{
        fontSize:12,
        marginLeft:5
    }
})
const Profile = ({ account, setAccountvalue }) => {
      const classes=useStyle();
      const [open,setOpen]=useState(false);

      const handleClose=()=>{
          setOpen(false);
      }

     const logout=()=>{
         setAccountvalue("");
     }

      const handleClick=(event)=>{
          setOpen(event.currentTarget);
      }
    return (
        <>
            <Typography onClick={handleClick} style={{ marginTop: 6,cursor:"pointer" }}>{account}</Typography>
            <Menu
                id="simple-menu"
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
             <MenuItem onClick={()=>{handleClose(); logout();}}> < ExitToAppIcon fontSize='small' color='primary' /> <Typography 
              className={classes.logout}>Logout</Typography> </MenuItem>
            </Menu>
        </>
    )
}

export default Profile

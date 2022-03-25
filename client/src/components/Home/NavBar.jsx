import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { navData } from '../../constant/data'
const useStyle=makeStyles(theme=>({
      component:{
          display:"flex",
          margin:"60px 130px 0 130px",
          justifyContent:"space-between",
          overflowX:"overlay",
         
          
          
      },
      container:{
          textAlign:"center"
      },

      image:{
          width:64
      },
      text:{
          fontSize:10,
          fontWeight:600,
          marginBottom:10
      }
}));
const NavBar = () => {
    const classes=useStyle();
  return (
     
     <Box className={classes.component}>
        {
            navData.map(data=>(
                <Box className={classes.container}>
                <img className={classes.image} src={data.url}/>
                <Typography className={classes.text}>{data.text} </Typography>
                </Box>
            ))
        }
     </Box>
  )
}

export default NavBar

import React from 'react'
import { ImageURL } from '../../constant/data';
import { Box, makeStyles } from '@material-ui/core';

const useStyle=makeStyles({
    wrapper:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:10
    }
})

const MidSec = () => {
    const classes=useStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
     <>
      <Box className={classes.wrapper}>
        {
            ImageURL.map(image=>(
                <img src={image} style={{width:"33.3%"}} />
            ))
        }
      </Box>

      <img src={coronaURL} style={{width:"100%",marginTop:10}} />
     </>
  )
}

export default MidSec

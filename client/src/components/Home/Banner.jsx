import { makeStyles } from '@material-ui/core';
import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../../constant/data';

const useStyle=makeStyles({
    image:{
        width:"100%",
        height:200
    },
    carousel:{
        marginTop:5
    }
})
const Banner = () => {
    const classes=useStyle();
  return (
   
    <Carousel autoPlay={true} animation="slide" indicators={false} navButtonsAlwaysVisible={true}
    cycleNavigation={true} navButtonsProps={{
        style:{
            background:"#fff",
            color:"#494949",
            borderRadius:0,
            margin:0,
           
        }
    }} 
    className={classes.carousel}>
            {
                bannerData.map( image =>(
                    <img src={image} className={classes.image} />
                ) )
            }
   </Carousel>
  )
}

export default Banner

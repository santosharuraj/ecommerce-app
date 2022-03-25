import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {makeStyles,Box, Typography, Button,Divider} from '@material-ui/core';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const useStyle=makeStyles({
    image:{
       height:150
    },
    component:{
        marginTop:10,
        backgroundColor:"#fff"
    },
    deal:{
        display:"flex",
        padding:"15px 20px"
    },
    dealtext:{
        fontSize:17,
        fontWeight:600,
        lineHeight:"32px",
        marginRight:13
    },
    timer:{
        color:"#7f7f7f",
        marginLeft:10,
        display:"flex",
        alignItems:"center"
    },
    button:{
        marginLeft:"auto",
        backgroundColor:"#2874f0",
        borderRadius:2,
        fontSize:10,
        fontWeight:600
    },
    text:{
        fontSize:12,
        marginTop:10,
        
    },
    wrapper:{
        padding:"35px 10px"
    }
})
const Slide = ({timer,title,products}) => {
  const classes=useStyle();
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer=({hours,minutes,seconds})=>{
      return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>
  }
  return (
     <Box className={classes.component}>
         <Box className={classes.deal}>
         <Typography className={classes.dealtext}>{title}</Typography>
         {
             timer && 
             <>
             <img src={timerURL} style={{width:24}} />
             <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
             </>
         }
         <Button variant='contained' color='primary' className={classes.button}> View All</Button>
         </Box>
         <Divider />
          <Carousel responsive={responsive}
       infinite={true}
       swipeable={false}
       draggable={false}
       autoPlaySpeed={1000}
       keyBoardControl={true}
       showDots={false}
       removeArrowOnDeviceType={["tablet", "mobile"]}
       dotListClass="custom-dot-list-style"
       itemClass="carousel-item-padding-40-px"
       containerClass="carousel-container"
       
       >
         {
             products.map(product=>(
                 <Link to={`product/${product.id}`} style={{ textDecoration:'none', color:'inherit'}}>
                 <Box textAlign="center" className={classes.wrapper}>
                     <img src={product.url} className={classes.image} />
                     <Typography className={classes.text} style={{fontWeight:600,color:"#212121"}}>{product.title.shortTitle}</Typography>
                     <Typography className={classes.text} style={{color:"green"}}>{product.discount}</Typography>
                     <Typography className={classes.text} style={{color:"#212121",opacity:0.6}}>{product.tagline}</Typography>

                 </Box>
                 </Link>
            ))
         }
      </Carousel>
     </Box>
  )
}

export default Slide

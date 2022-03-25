import React from 'react'
import { Card,makeStyles,Box, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';
import Groupbuttonclick from './Groupbutton';
const useStyle=makeStyles({
    component:{
         display:"flex",
         borderRadius:0,
         borderTop:"1px solid #f2f2f2"
    },
    leftcomponent:{
        margin:20,
        display:"flex",
        flexDirection:"column"
        
    },
    rightcomponent:{
        margin:10,
        
    },
    smalltext:{
      fontSize:14
    },
    greyColor:{
      color:"#878787"
    },
    image:{
        width:110,
        height:110
    },
    remove:{
        marginTop:34
    }
})
const CartItem = ({item,removeItemFromCart}) => {
    const classes=useStyle();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  return (
    <Card className={classes.component}>
        <Box className={classes.leftcomponent}>
          <img src={item.url} className={classes.image}/>
         <Groupbuttonclick/>
        </Box>
        <Box className={classes.rightcomponent}>
          <Typography>{item.title.longTitle}</Typography>
          <Typography className={clsx(classes.greyColor,classes.smalltext)} style={{marginTop:10}}>Seller:supercon
              <span> <img src={fassured} style={{width:50,marginLeft:5}} /> </span>
          </Typography>
          <Typography style={{margin:"20px 0"}}>
              <span style={{fontWeight:600,fontSize:18}}>₹{item.price.cost}</span> &nbsp;&nbsp;
              <span className={classes.greyColor}><strike>₹{item.price.mrp}</strike> </span>&nbsp;&nbsp;
              <span style={{color:"#00cc00"}}>{item.price.discount}off</span>
          </Typography>
          <Button className={classes.remove} onClick={()=>removeItemFromCart(item.id)}>Remove</Button>
        </Box>
    </Card>
  )
}

export default CartItem

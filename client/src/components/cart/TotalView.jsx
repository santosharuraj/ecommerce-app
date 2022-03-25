import React, { useEffect, useState } from 'react';
import { Box, Typography,makeStyles } from '@material-ui/core';

const useStyle=makeStyles({
    component:{
      width:"30%",
      background:"#fff",
      marginLeft:10
    },
    header:{
        padding:"16px 24px",
        borderBottom:"1px solid #f2f2f2"
    },
    container:{
        padding:"15px 24px",
        "& > *":{
            marginTop:10,
            fontSize:14
        }
    },
    greyColor:{
        color:"#878787"
    },
    price:{
      float:"right"
    },
    totalAmount:{
        fontWeight:600,
        fontSize:18,
        borderTop:"1px dashed #c0c0c0",
        padding:"20px 0",
        borderBottom:"1px dashed #c0c0c0",
    }
})
const TotalView = ({cartItems}) => {
    const classes=useStyle();
    const [price,setPrice]=useState(0);
    const [discount,setDiscount]=useState(0);
     
    useEffect(()=>{
         totalAmount();
    },[cartItems]);

    const totalAmount=()=>{
        let price=0,discount=0;
        cartItems.map(item=>(
            price+=item.price.mrp,
            discount+=(item.price.mrp-item.price.cost)
        ))
        setPrice(price);
        setDiscount(discount);
    }
  return (
    <Box className={classes.component}>
      <Box className={classes.header}>
        <Typography className={classes.greyColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={classes.container}>
          <Typography>Price ({cartItems.length} item) <span className={classes.price}>₹{price}</span> </Typography>
          <Typography style={{color:"green"}}>Discount <span className={classes.price}>-₹{discount}</span></Typography>
          <Typography>Delivery Charges <span className={classes.price}>₹40</span></Typography>
          <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹{price-discount+40}</span></Typography>
          <Typography style={{color:"green",fontWeight:600,fontSize:12}}>You will save ₹{discount} on this order</Typography>
      </Box>
    </Box>
  )
}


export default TotalView

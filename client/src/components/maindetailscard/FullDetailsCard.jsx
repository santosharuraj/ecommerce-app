import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails} from '../../redux/actions/productActions';
import { makeStyles,Box, Typography, Table, TableRow, TableCell, TableBody } from '@material-ui/core';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ActionIcon from './ActionIcon';
import clsx from 'clsx';
const useStyle=makeStyles({
  component:{
    marginTop:55,
    background:"#f2f2f2"
  }
  ,container:{
    margin:"0 80px",
    background:"#fff",
    display:"flex"
  },
  rightcontainer:{
    marginTop:50,
    '& >*':{
      marginTop:5
    }
  },
  smallText:{
    fontSize:13,
    verticalAlign:"baseline",
    '& > *':{
      marginTop:6
    }
  },
  greyColor:{
    color:"#878787"
  },
  badge:{
    fontSize:14,
    marginRight:7,
    marginTop:3,
    color:"#00cc00"
  }
})
const FullDetailsCard = ({match}) => {
  
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const sellerURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  const classes=useStyle();
  const {id}=useParams();
  const {product}=useSelector(state=>state.getProductDetails);
  const date=new Date(new Date().getTime()+(5*24*60*60*1000));
  const dispatch=useDispatch();
  useEffect(()=>{
      dispatch(getProductDetails(id));
  },[dispatch]);
  return (
     <Box className={classes.component} >
        {
          product && Object.keys(product).length &&
          <Box className={classes.container}>
          <Box style={{minWidth:"40%"}}>
            <ActionIcon product={product}/>
          </Box>
          <Box className={classes.rightcontainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography className={clsx(classes.smallText, classes.greyColor)}>
              8 rating &amp; 1 review
              <span> <img src={fassured} style={{width:67,marginLeft:5}}/> </span>
              </Typography>

              <Typography>
                <span style={{fontSize:20,fontWeight:600}}>₹{product.price.cost} </span> &nbsp; &nbsp;
                <span className={classes.greyColor}> <strike>₹{product.price.mrp} </strike> </span> &nbsp; &nbsp;
                <span style={{color:"#00cc00"}}>{product.price.discount} off </span>
              </Typography>
            
              <Typography style={{fontWeight:600,fontSize:15}}>Available Offers</Typography>
              <Box className={classes.smallText}>
              <Typography> <LocalOfferIcon className={classes.badge}/>PriceGet extra 58% off (price inclusive of discount)</Typography>
              <Typography> <LocalOfferIcon className={classes.badge}/>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
              <Typography><LocalOfferIcon className={classes.badge}/>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*</Typography>
             </Box>
             <Table>
               <TableBody>
                 <TableRow className={classes.smallText}>
                   <TableCell  className={classes.greyColor} >Delivery</TableCell>
                   <TableCell style={{fontWeight:600}}>{date.toDateString()}</TableCell>
                 </TableRow>
                 <TableRow className={classes.smallText}>
                   <TableCell className={classes.greyColor}>Warranty</TableCell>
                   <TableCell>No warranty</TableCell>
                 </TableRow>
                 <TableRow className={classes.smallText}>
                   <TableCell className={classes.greyColor}>Seller</TableCell>
                   <TableCell className={classes.smallText}>
                     <span style={{color:"#2874f0"}}>Supercon</span>
                     <Typography>GST Invoid Available</Typography>
                     <Typography>14 Days Return Policy</Typography>
                     <Typography>View more seller starting from ₹{product.price.cost} </Typography>
                   </TableCell>
                 </TableRow>
                 <TableRow>
                   <TableCell colSpan={2}> <img src={sellerURL} style={{width:300}} /> </TableCell>
                 </TableRow>
                 <TableRow className={classes.smallText}>
                   <TableCell className={classes.greyColor}>Description</TableCell>
                   <TableCell >{product.description}</TableCell>
                 </TableRow>
               </TableBody>
            </Table>  
          </Box>
        </Box>
        }
     </Box>
  )
}

export default FullDetailsCard

import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {Box,Button,makeStyles, Typography} from "@material-ui/core"
import CartItem from './CartItem';
import { removeFromItem } from '../../redux/actions/cartAction';
import Emptycart from './Emptycart';
import TotalView from './TotalView';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
const useStyle=makeStyles({
    component:{
      marginTop:55,
      padding:"30px 135px",
      display:"flex"
    },
    header:{
      padding:"15px 20px",
      background:"#fff"
    },
    leftcomponent:{
      width:"67%"
    },
    placeorder:{
      display:"flex",
      marginLeft:"auto",
      borderRadius:1,
      background:"#fb641b",
      color:"#fff",
      height:45,
      width:"200px"
    },
    bottom:{
      padding:"10px 15px",
      background:"#fff",
      borderTop:"1px solid #f2f2f2",
      boxShadow:"0 -2px 10px 0 rgb(0 0 0 /10%)"
    }
})
const Cart = () => {
  const classes=useStyle();
  const {cartItems}=useSelector(state=>state.cart);
  const dispatch=useDispatch();
  useEffect(()=>{
 
  })

  const removeItemFromCart=(id)=>{
     dispatch(removeFromItem(id));
  } 

  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 1, email: 'santoshraj@gmail.com'});
    let information = {
        action: 'https://securegw-stage.paytm.in/order/process',
        params: response    
    }
    post(information);
}
  return (
     <>
      {
        cartItems.length ?
         <Box className={classes.component} >
           <Box className={classes.leftcomponent}>
              <Box className={classes.header}>
                <Typography style={{fontWeight:600,fontSize:19}}>My Cart ({ cartItems.length})</Typography>
              </Box>
              {
                cartItems.map(item=>(
                  <CartItem item={item} removeItemFromCart={removeItemFromCart}/>
                ))
              }
              <Box className={classes.bottom}>
                <Button onClick={()=>buyNow()} className={classes.placeorder} variant='contained'>Place Order</Button>
              </Box>
           </Box>
           <TotalView cartItems={cartItems} />

        </Box>
        :
        <Box>
          <Emptycart/>
        </Box>
      }
     </>
  )
}

export default Cart

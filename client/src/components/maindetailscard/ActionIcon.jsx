import { Button,Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { AddtoCart } from '../../redux/actions/cartAction';
import {useDispatch} from "react-redux";
import {useNavigate}  from 'react-router-dom'
import {payUsingPaytm} from '../../service/api.js'
import { post } from '../../utils/paytm.js';
import clsx from 'clsx';
import React from 'react'
const useStyle=makeStyles({
    leftcontainer:{
        padding:"40px 0 0 80px"
    },
    image:{
        padding:"15px 20px",
        border:"1px solid #f2f2f2",
        width:"90%"
    },
    button:{
        height:50,
        width:"46%",
        borderRadius:1
    },
    addtocart:{
        background:"#ff9f00",
        color:"#fff",
        marginRight:10
    },
    buynow:{
        background:"#fb641b",
        color:"#fff"
    }
})

const ActionIcon = ({product}) => {
    const history=useNavigate();
    const classes=useStyle();
    const dispatch=useDispatch();
    const addtocart=()=>{
        dispatch(AddtoCart(product.id));
        history("/cart");
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
    <Box className={classes.leftcontainer}>
        <img src={product.url} className={classes.image} /><br/>
        <Button onClick={()=>addtocart()} variant="contained" className={clsx(classes.button ,classes.addtocart)} ><ShoppingCartIcon/> Add to Cart</Button>
        <Button onClick={()=>buyNow()} variant="contained" className={clsx(classes.button,classes.buynow)}><FlashOnIcon/> Buy Now</Button>
    </Box>
  )
}

export default ActionIcon

import {React, useState,useContext} from 'react'
import {Box,Button,makeStyles,Typography,Badge} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { NavLink} from 'react-router-dom';
import Login from '../login/Login';
import {LoginContext} from '../../context/ContextProvider'
import Profile from './Profile';
import {useSelector} from "react-redux";

const useStyle=makeStyles({
    login:{
      background:"#ffffff",
      color:"#2674f0",
      textTransform:"none",
      fontWeight:600,
      borderRadius:0,
      padding:"5px 40px ",
      boxShadow:"none"
    },
    wrapper:{
        margin:"0 7% 0 auto",
        display:"flex",
        '& > *':{
            marginRight:50,
            alignItems:"center"
        }
    },
    container:{
        display:"flex",
        textDecoration:"none",
        color:"#fff"
    
    }
})
const HeaderButton = () => {
    const classes=useStyle();
    const [open,setOpen]=useState(false);
    const {account,setAccountvalue}=useContext(LoginContext);
     
    const {cartItems}=useSelector(state=>state.cart);

    
    const openloginDialog=()=>{
      setOpen(true);
    }
   
  return (
    <Box className={classes.wrapper}>
      {
        account ? <Profile account={account} setAccountvalue={setAccountvalue}/>:
        <Button onClick={()=>openloginDialog()}  variant='contained' className={classes.login}>Login</Button>
      }
      
      <Typography style={{marginTop:6}}>More</Typography>
      <NavLink to="/cart" className={classes.container}>
      <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon/>
         </Badge>
         <Typography style={{marginLeft:10}}> Cart</Typography>
      </NavLink >
      <Login open={open} setOpen={setOpen} setAccountvalue={setAccountvalue}/>
    </Box>
  )
}

export default HeaderButton

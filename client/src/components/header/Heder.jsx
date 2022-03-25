import React from 'react'
import {AppBar,Toolbar,makeStyles,Typography,Box, withStyles} from '@material-ui/core';
import SearchBar from './SearchBar';
import HeaderButton from './HeaderButton';
import { Link } from 'react-router-dom';
const useStyle=makeStyles({
    header:{
        background:'#2874f0',
        height:55
    },

    logo:{
        width:75
    },
    subURL:{
        width:10,
        height:10,
        marginLeft:4
    },
    container:{
        display:'flex'
    },
    component:{
        marginLeft:'12%',
        lineHeight:0,
        textDecoration:"none",
        color:"#fff"
    },
    subheading:{
        fontSize:10,
        fontStyle:'italic'
    }
})

const Toolbar1=withStyles({
    root:{
        minHeight:55
    }
})(Toolbar);
const Heder = () => {
    const classes=useStyle();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  return (
    <AppBar className={classes.header}>
    <Toolbar1>
        <Link to="/" className={classes.component}>
        <img src={logoURL} alt="logo" className={classes.logo} />
        <Box className={classes.container}>
        <Typography className={classes.subheading}>Explore <Box component="span" style={{color:"#ffe500"}}> Plus </Box></Typography>
        <img src={subURL} alt="" className={classes.subURL} />
        </Box>
        </Link>
        <SearchBar/>
        <HeaderButton/>
      
   </Toolbar1>
  </AppBar>
  )
}

export default Heder

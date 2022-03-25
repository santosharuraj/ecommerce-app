import React from 'react'
import { makeStyles,Box, Card, Typography, Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const useStyle=makeStyles({
   
    component:{
      margin:"70px 150px",
      width:"80%",
      background:"#fff",
      height:"55vh",
      borderRadius:1
    },
    image:{
        width:"15%"
    },
    container:{
        textAlign:"center",
        paddingTop:"40px",
       
    },
    button:{
      borderRadius:0,
      marginTop:70,
      width:"200px",
      background:"#2874f0",
      color:"#fff",
      height:50
    }
})

const Emptycart = () => {
  const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  const classes=useStyle();
  const navigate=useNavigate();
  const homepage=()=>{
     navigate("/");
  }
  return (
    <Card className={classes.component}>
       <Box className={classes.container}>
       <img src={emptycarturl} className={classes.image}/>
       <Typography style={{marginTop:10}}>Missing Cart items?</Typography>
       <Typography>Add item to it now</Typography>
       <Button variant='contained' onClick={()=>homepage()} className={classes.button}>Shop now</Button>
       </Box>
    </Card>
  )
}

export default Emptycart

import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import {Box,makeStyles} from '@material-ui/core';
import Slide from './Slide';
import MidSec from './MidSec'
// import { products } from '../../constant/data.js';
import {useSelector,useDispatch} from 'react-redux';
import { getProducts as listProducts } from '../../redux/actions/productActions';

const useStyle=makeStyles({
   component:{
       padding:10,
       background:"#f2f2f2"
      
   },
   rightwrapper:{
     background:"#ffffff",
     padding:5,
     margin:"10px 5px 0 10px",
     width:"20%"
   }
})


const Home = () => {
    const classes=useStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const {products}=useSelector(state=>state.getProducts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(listProducts());
    },[dispatch])
  return (
     <div>
         <NavBar/>
         <Box className={classes.component}>
         <Banner/>
          <Box style={{display:"flex"}}>
              <Box style={{width:"81%"}}>
              <Slide timer={true}
                title="Deal of the day"
                products={products}
              />
              </Box>

              <Box className={classes.rightwrapper}>
               <img src={adURL} style={{width:230}}/>
              </Box>
          </Box>
          <MidSec/>
          <Slide timer={false} title="Discount for You"  products={products}/>
          <Slide timer={false} title="Suggested Items"  products={products}/>
          <Slide timer={true} title="Top Selections"  products={products}/>
         </Box>
        
     </div>
  )
}

export default Home

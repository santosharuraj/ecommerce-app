import React from 'react'
import {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProductDetails} from '../../redux/actions/productActions';
import {Box,makeStyles} from "@material-ui/core";

const useStyle=makeStyles({
  component:{
     marginTop:55,
     background:"#f2f2f2"
  },
  container:{
    margin:"0px 80px"
  }
})

 const DetailView = ({match}) => {
   const classes=useStyle();
  const {product} = useSelector(state => state.getProductDetails);
  const dispatch = useDispatch();

 useEffect(()=>{
   dispatch(getProductDetails(this.props.match.params.id));
 })
  return (
    <Box className={classes.component}>
      <Box className={classes.container}>
        <Box>

        </Box>
        <Box>

        </Box>
      </Box>
    </Box>
  )
}

export default DetailView;



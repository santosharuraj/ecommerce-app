import { Button,ButtonGroup, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle=makeStyles({
  component:{
       marginTop:30
  },
  button:{
    borderRadius:"50%"
  }
})
const Groupbuttonclick = () => {
  const classes=useStyle();
  const [counter,setCounter]=useState(1);
  const Decrement=()=>{
    setCounter(counter=>counter-1);
  }
  const Increment=()=>{
    setCounter(counter=>counter+1);
  }

  return (
    <ButtonGroup className={classes.component}>
        <Button onClick={()=>Decrement()} disabled={counter==1} className={classes.button}>-</Button>
        <Button>{counter}</Button>
        <Button onClick={()=>Increment()} className={classes.button}>+</Button>
    </ButtonGroup>
  )
}


export default Groupbuttonclick;

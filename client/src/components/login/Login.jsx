import { React, useState } from 'react'
import { Box, Button, Dialog, DialogContent, makeStyles, TextField, Typography } from '@material-ui/core'
import { authenticateSignup, authenticateLogin } from '../../service/api'

const useStyle = makeStyles({
  component: {
    height: "80vh",
    width: "90vh"
  },
  image: {
    backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
    height: "65vh",
    backgroundRepeat: "no-repeat",
    background: "#2874f0",
    width: "40%",
    backgroundPosition: "center 85%",
    padding: "45px 45px",
    '& > *': {
      color: "#fff",
      fontWeight: 600
    }
  },
  login: {
    padding: "25px 35px",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    '& > *': {
      marginTop: 14
    }
  },
  text: {
    color: "#878787",
    fontSize: 12
  },
  loginbtn: {
    textTransform: "none",
    background: "#fb6416",
    color: "#fff",
    height: 40,
    borderRadius: 2,
    boxShadow: "none"
  },
  requestbtn: {
    textTransform: "none",
    background: "#fff",
    color: "#2874f0",
    height: 40,
    borderRadius: 2,
    boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)"
  },
  createText: {
    textAlign: "center",
    marginTop: "auto",
    color: "#2874f0",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer"
  },
  error:{
    color:"#ff6161",
    marginTop:3,
    fontWeight:600
  }
})

const initialvalue = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your Orders, Wishlist and Recommendations"
  },
  signup: {
    view: "signup",
    heading: "Look like you're new here !",
    subheading: "Sign up with your details to get started"
  }
}

const singupInitialvalues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: ""
}

const loginInitialvalues = {
  username: "",
  password: ""

}
const Login = ({ open, setOpen, setAccountvalue }) => {
  const [account, setAccount] = useState(initialvalue.login);
  const [signup, setSignup] = useState(singupInitialvalues);
  const [login,setLogin]=useState(loginInitialvalues);
  const [error,setError]=useState(false);
  const classes = useStyle();
  const handleClose = () => {
    setOpen(false);
    setError(false);
    setAccount(initialvalue.login);
  }

  const toggleAccount = () => {
    setAccount(initialvalue.signup);
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccountvalue(signup.username);
  }

  const userLogin=async()=>{
      let response=await authenticateLogin(login);
      if(!response){
        setError(true);
        return
      };
      handleClose();
      setAccountvalue(login.username);

  }

  const OnInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    // console.log(signup);
  }

  const OnValueChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value});
    console.log(login);
  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent className={classes.component}>
        <Box style={{ display: "flex" }} >
          <Box className={classes.image}>
            <Typography variant='h5' style={{ fontSize: 20, marginBottom: 10 }}>{account.heading}</Typography>
            <Typography>{account.subheading}</Typography>
          </Box>
          {account.view === "login" ?
            <Box className={classes.login}>
              <TextField onChange={(e)=>OnValueChange(e)}  name='username' label="Enter Username" />
              <TextField onChange={(e)=>OnValueChange(e)}  name="password" label="Enter Password" />
              { error && <Typography className={classes.error}>Invalid username or password </Typography>}
              <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
              <Button variant='contained' onClick={()=>userLogin()} className={classes.loginbtn}>Login</Button>
              <Typography className={classes.text} style={{ textAlign: "center" }}>OR</Typography>
              <Button variant='contained' className={classes.requestbtn}>Request OTP</Button>
              <Typography onClick={() => toggleAccount()} className={classes.createText}>New to Flipkart? Create an account</Typography>
            </Box> :
            <Box className={classes.login}>
              <TextField onChange={(e) => OnInputChange(e)} name='firstname' label="Enter FirstName" />
              <TextField onChange={(e) => OnInputChange(e)} name="lastname" label="Enter LastName" />
              <TextField onChange={(e) => OnInputChange(e)} name="username" label="Enter Username" />
              <TextField onChange={(e) => OnInputChange(e)} name="email" label="Enter Email" />
              <TextField onChange={(e) => OnInputChange(e)} name="phone" label="Enter Mobile Number" />
              <TextField onChange={(e) => OnInputChange(e)} name="password" label="Enter Password" />
              <Button variant='contained' onClick={() => signupUser()} className={classes.loginbtn}>Signup</Button>
            </Box>
          }
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default Login

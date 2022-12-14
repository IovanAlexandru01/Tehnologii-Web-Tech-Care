import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import './Login.css';
import Button from '@mui/material/Button';
import techcarelogo from './images/techcarelogo.png';
import { useForm } from "react-hook-form";
import  Axios  from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {toast} from "react-toastify";


const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const [user, setUser] = useState("");
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:5000/login",{
         emailform:email,
         passwordform:password
        }).then((response) => {
            if(response.data.message){
                toast.error(response.data.message);
            } else{
                setUser(response.data.user);
                console.log(response);
                // console.log(response);
                navigate("../dashboard");
                // setLoginStatus(response.data[0].username);

            }
        });
 };
  // asata trebuie pentru mainPage
    useEffect(() => {
        Axios.get("http://localhost:5000/login").then((response) =>{
            console.log(response);
            if(response.data.loggedIn == true) {
            setLoginStatus( response.data.user[0].email);
            }
        })
    },[])
      
    const {register, handleSubmit, formState: { errors } } = useForm(); 

    const onSubmit = (data) => {
        // console.log(data,errors);
    }

    return (
    <div className="login">
        <Box sx={{ flexGrow: 3, flexDirection:'column' }}>
            <Box
        component="img"
        sx={{
          height: 250,
          width: 250,
          maxHeight: { xs: 110, md:250, xl: 250 },
          maxWidth: { xs: 110, md:250, xl: 250 },
        }}
        alt="tech care logo"
        src={techcarelogo}
      />
            <Grid2 container justifyContent={'center'}>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid2 mt={5} container spacing={15} sx={{mx:'auto',justifyContent:'center'}}>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-3%"}}>
                        <label className="email">Email</label>
                        <Input sx={{marginLeft:'3%',width:'28%',color:'white'}} {...register('email', { required: true})} onChange={(e)=>{
                            setEmail(e.target.value);}}/>
                        {errors.email && errors.email.type === "required" && <span style={{color:'red',justifyContent:'center',paddingTop:'-3%',marginLeft:'3%'}}><br/>E-mail is required!</span>}
                    </Grid2>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-3%"}}>
                        <label className="password">Password</label>
                        <Input sx={{marginLeft:'1%',color:'white',width:'28%'}} type="password" {...register('password', { required: true})} onChange={(e)=>{
                            setPassword(e.target.value);}}/>
                        {errors.password && errors.password.type === "required" && <span style={{marginLeft:'3%',paddingTop:'-3%',color:'red',justifyContent:'center'}}><br/>Password is required!</span>}
                    </Grid2>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-3%"}}>
                        <Button type="submit" sx={{width:'33%',marginTop:'-1%',position:'relative',top:'-133%',backgroundColor:'#30c6cf'}} variant="contained" onClick={login}>Login</Button>
                    </Grid2>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-10%"}}>
                        <p style={{color:'white'}}>Don't have an account? <a href='./register' style={{color:'#30c6cf'}}>Click here!</a> </p> 
                    </Grid2>
                </Grid2>
                </form>
            </Grid2>
        </Box>            
    </div>

    )
}

export default Login;

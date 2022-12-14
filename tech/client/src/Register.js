import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import './Register.css';
import Button from '@mui/material/Button';
import techcarelogo from './images/techcarelogo.png';
import { useForm } from "react-hook-form";
import  Axios  from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";


const Register = () => {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [showError, setShowError] = useState(0);
    const navigate = useNavigate();
    
    Axios.defaults.withCredentials = true;
    const registration = () =>{
          Axios.post("http://localhost:5000/register",{
            firstNameform:firstName,
            lastNameform:lastName,
            emailform:email,
            passwordform:password
           }).then((response) => {
            console.log(showError);
            if(response.data.error && !showError){
                toast.error(response.data.error);
                setShowError(1);
            }
            if(response.data.message){
                toast.success(response.data.message);
                navigate('../login');
            }
           });
    };

    const {register, handleSubmit, formState: { errors } } = useForm(); 
 
    const onSubmit = () => {
        // console.log(errors);
    }

    const setFirstNameValue = (value) => {
        setFirstName(value);
        setShowError(0);
    }

    const setLastNameValue = (value) => {
        setLastName(value);
        setShowError(0);
    }

    const setEmailValue = (value) => {
        setEmail(value);
        setShowError(0);
    }

    const setPasswordValue = (value) => {
        setPassword(value);
        setShowError(0);
    }


    return (
    <div className="register">
        
        <Box sx={{ flexGrow: 3, flexDirection:'column' }}>
            <Box
        component="img"
        sx={{
          height: 250,
          width: 250,
          maxHeight: { xs: 110, md:250, xl: 250 },
          maxWidth: { xs: 110, md:250, xl: 250 },
        }}
        alt="techcarelogo"
        src={techcarelogo}
      />
            <Grid2 container justifyContent={'center'}>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid2 mt={5} container spacing={15} sx={{mx:'auto',justifyContent:'center'}}>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-3%"}}>
                        <label className="password">First name</label>
                        <Input sx={{marginLeft:'1%',color:'white',width:'28%'}} {...register('firstname', { required: true})} onChange={(e)=>{
                            setFirstNameValue(e.target.value);
                        }}/>
                        {errors.firstname && errors.firstname.type === "required" && <span style={{marginLeft:'3%',paddingTop:'-3%',color:'red',justifyContent:'center'}}><br/>First name is required!</span>}
                    </Grid2>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-3%"}}>
                            <label className="password">Last name</label>
                            <Input sx={{marginLeft:'1%',color:'white',width:'28%'}} {...register('lastname', { required: true})} onChange={(e)=>{
                            setLastNameValue(e.target.value);
                        }}/>
                        {errors.lastname && errors.lastname.type === "required" && <span style={{marginLeft:'3%',paddingTop:'-3%',color:'red',justifyContent:'center'}}><br/>Last name is required!</span>}
                    </Grid2>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-3%"}}>
                        <label className="email">Email</label>
                        <Input sx={{marginLeft:'3%',width:'28%',color:'white'}} {...register('email', { required: true})} onChange={(e)=>{
                            setEmailValue(e.target.value);
                        }}/>
                        {errors.email && errors.email.type === "required" && <span style={{color:'red',justifyContent:'center',paddingTop:'-3%',marginLeft:'3%'}}><br/>E-mail is required!</span>}
                    </Grid2>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-3%"}}>
                        <label className="password">Password</label>
                        <Input sx={{marginLeft:'1%',color:'white',width:'28%'}} type="password" {...register('password', { required: true})} onChange={(e)=>{
                            setPasswordValue(e.target.value);
                        }}/>
                        {errors.password && errors.password.type === "required" && <span style={{marginLeft:'3%',paddingTop:'-3%',color:'red',justifyContent:'center'}}><br/>Password is required!</span>}
                    </Grid2>
                    <Grid2 xs={12} md={12}  xl={12} sx={{marginTop:"-3%"}}>
                        <Button type="submit" sx={{width:'33%',marginTop:'-1%',position:'relative',top:'-133%',backgroundColor:'#30c6cf'}} variant="contained" onClick={registration}>Register</Button>
                    </Grid2>
                    <Grid2 xs={12} md={12} xl={12} sx={{marginTop:"-7%"}}>
                        <p style={{color:'white'}}>Already have an account? <a href='./login' style={{color:'#30c6cf'}}>Click here!</a> </p> 
                    </Grid2>
                </Grid2>
                </form>
            </Grid2>
        </Box>            
    </div>

    )
}

export default Register;

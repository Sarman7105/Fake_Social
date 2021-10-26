import React, { useReducer } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from '../UI/Card/Card';
import './ForgotPassword.scss';

const initialForm ={email: "",isEmailValid: false, error:""}
const formReducer=(state,action)=>{

    if(action.type==="setEmail"){
        return {
            email:action.value,
            isEmailValid:state.isEmailValid,
            error:"",
        }
    }

    if(action.type==="isEmailValid"){
        let error="";
        let isValid=true;
        if(!state.email){
            error="Email is required!";
            isValid=false;
        }
        else if(!state.email.includes('@')){
            error="Enter a valid email address!"
            isValid=false;
        }
        return {
            email:state.email,
            isEmailValid:isValid,
            error:error,
        }
    }
}

const ForgotPassword = () => {
    
    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        // console.log(name," ",value)
        dispatchForm({type:"setEmail",value});

    }
    const handleOnBlur =()=>{
        dispatchForm({type:"isEmailValid"});
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        if(form.isEmailValid){
            // const config = {
            //     headers: { Authorization: `Bearer ${token}` }
            // };
            
            const bodyParameters = {
               email: form.email
            };
            
            axios.post( 
              'http://localhost:8000/api/v1/forgetPassword',
              bodyParameters,
            //   config
            ).then((res)=>{
                if(res.status===200){
                    console.log("email");
                }
            })
            .catch((err)=>console.log(err.message));
        }
        
    }

    const [form, dispatchForm]=useReducer(formReducer,initialForm)
    return (
        <div className="forgotPassword">
            <Card className="forgotPasswordCard">
                <h3>Find your account</h3>
                <div className="divider"></div>
                <p>Enter your email address to find your account.</p>
                <form onSubmit={handleOnSubmit}>
                <div className="forgotPasswordFormElement">
                    <input onChange={handleOnChange} onBlur={handleOnBlur} name="email" autoFocus type="text" placeholder="Enter your email address" />
                    {
                        <p className="error"> <small>{form.error}</small> </p>
                    }
                </div>

                <div className="forgotPasswordFormElement">
                    <input type="submit" value="Submit" />

                <Link to='/' className="link">
                    <button className="forgotPasswordCancel">
                       Cancel
                    </button> 
                </Link>
                </div>
                </form>
            </Card>
            
        </div>
    );
};

export default ForgotPassword;
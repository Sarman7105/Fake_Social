import axios from 'axios';
import React, { useReducer,useRef } from 'react';
import { useState } from 'react';
import { Link,useParams,useHistory } from 'react-router-dom';
import Card from '../UI/Card/Card';
import './ResetPassword.scss';


const ResetPassword = () => {

    const passwordRef=useRef();
    const confirmPasswordRef=useRef();
    const[passwordError,setPasswordError]=useState("");
    const[confirmPasswordError,setConfirmPasswordError]=useState("");

    const {token,email}=useParams();
    const history=useHistory()

    const handleOnSubmit=(e)=>{
      e.preventDefault();
      setPasswordError("");
      setConfirmPasswordError("");
      const password=passwordRef.current.value;
      const confirmPassword=confirmPasswordRef.current.value;
      let isValid=true;
      if(password.length===0){
        setPasswordError("Password is required");
        isValid=false;
      }
      if(password.length<6){
        setPasswordError("Password must be six digit long");
        isValid=false;
      }

      if(password !== confirmPassword){
        setConfirmPasswordError("Confirm password must be equal to password");
        isValid=false;
      }

      if(isValid){
          // const config = {
            //     headers: { Authorization: `Bearer ${token}` }
            // };
            
            const bodyParameters = {
                email:email,
                token:token,
                password:passwordRef.current.value,
             };
             
             axios.post( 
               'http://localhost:8000/api/v1/updatePassword',
               bodyParameters,
             //   config
             ).then((res)=>{
                 if(res.status===200){
                     history.replace('/login');
                 }
             })
             .catch((err)=>{
                 alert('invalid credential')
             });
      }
      
    }

  
    return (
        <div className="passwordReset">
            <Card className="passwordResetCard">
                <h3>Reset your password</h3>
                <div className="divider"></div>
                <p>Enter your new password</p>
                <form onSubmit={handleOnSubmit}>
                <div className="passwordResetFormElement">
                    <input ref={passwordRef} name="password" autoFocus type="password" placeholder="Password(at least six character)" />
                    {
                        <p className="error"> <small>{passwordError}</small> </p>
                    }
                </div>

                <div className="passwordResetFormElement">
                    <input ref={confirmPasswordRef} name="confirmPassword" type="password" placeholder="Retype your password" />
                    {
                        <p className="error"> <small>{confirmPasswordError}</small> </p>
                    }
                </div>


                <div className="passwordResetFormElement">
                    <input type="submit" value="Submit" />

                <Link to='/' className="link">
                    <button className="passwordResetCancel">
                       Cancel
                    </button> 
                </Link>
                </div>
                </form>
            </Card>
            
        </div>
    );
};

export default ResetPassword;
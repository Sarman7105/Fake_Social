import React,{useContext} from 'react';
import './VerifyUser.scss';
import Card from '../../Components/UI/Card/Card';
import { Link,useHistory } from 'react-router-dom';
import AuthContext from '../../Store/AuthContext';
import { useRef } from 'react';
import { useState } from 'react';
import axios from 'axios';

const VerifyUser = () => {
    const[error,setError]=useState("");
    const authCtx=useContext(AuthContext);
    const {id,otp}=authCtx.user;
    const otpRef=useRef();
    const history=useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault();
        setError("");
        let isValid=true;
        const inputOtp=otpRef.current.value;
        // console.log(typeof(inputOtp));
        if(otp!=inputOtp){
            setError('Wrong OTP');
            isValid=false;
        }
        const url=`http://127.0.0.1:8000/api/v1/verify/${otp}/${id}`;
        console.log(url);
        if(isValid){
            axios.get(url)
            .then(res=>{
               console.log(res);
               
               authCtx.setUser(res.data.data.user);
               const id=res.data.data.user.id;
               const token=authCtx.user.token;
               const expTime=new Date().getTime()+3400000;
               authCtx.login(token,expTime,id);
               history.push("/");
            })
            .catch(err=>console.log(err.response));
        }
    }
    return (
        <div className='verifyUser'>
            <Card className="verifyUserCard">
                <p>A code has been sent to your email address. Please enter your verification code </p>
                <form onSubmit={handleSubmit}>
                <div className="verifyUserFormElement">
                    <input ref={otpRef}  autoFocus type="number" placeholder="Enter verification code" />
                    <p className="error"> <small>{error}</small> </p>
                </div>

                <div className="verifyUserFormElement">
                    <input type="submit" value="Submit" />

                <Link to='/' className="link">
                    <button className="verifyUserCancel">
                       Cancel
                    </button> 
                </Link>
                </div>
                </form>
            </Card>
        </div>
    );
};

export default VerifyUser;
import React, { forwardRef, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const formReducer=(state,action)=>{

    if(action.type==="setEmail"){
        console.log(state);
        return {
            email:action.value,
            isEmailValid:action.value.includes('@'),
            password:state.password,
            isPasswordValid:state.isPasswordValid
        };
    }

    if(action.type==="setPassword"){
        console.log(state);
        return {
            email:state.email,
            isEmailValid:state.isEmailValid,
            password:action.value,
            isPasswordValid:action.value.trim().length>=6
        };

    }

    if(action.type==="isEmailValid"){
        console.log(state);
        return {
            email:state.email,
            isEmailValid:state.email.includes('@'),
            password:state.password,
            isPasswordValid:state.isPasswordValid
        };
    }

    if(action.type==="isPasswordValid"){
        console.log(state);
        return {
            email:state.email,
            isEmailValid:state.isEmailValid,
            password:state.password,
            isPasswordValid:state.password.trim().length>=6,
        };
    }


    return {email:"",password:"",isValid:false}

};

const LoginForm = forwardRef((props,ref) => {
    const initialValue={
        email:"",
        isEmailValid:false,
        password:"",
        isPasswordValid:false,
    }
    const[formState,dispatchForm]=useReducer(formReducer,initialValue);
    
    const onChangeHandler=(event)=>{
        const name=event.target.name;
        const value=event.target.value;

        // console.log(name," ",value)
        if(name==="email"){
            dispatchForm({type:"setEmail",value:value});
        }

        if(name==="password"){
            dispatchForm({type:"setPassword",value:value});
        }

    }


    // const handleOnBlur=(event)=>{
    //     const name=event.target.name;
    //     const value=event.target.value;

    //     // console.log(name," ",value)
    //     if(name==="email"){
    //         dispatchForm({type:"isEmailValid"});
    //     }

    //     if(name==="password"){
    //         dispatchForm({type:"isPasswordValid"});
    //     }

    // }

    
    return (
        <div className="loginFormContainer">
            <h3>Login Form</h3>
            <form className="loginForm" action="">

                <div className="loginFormElement">
                    <input  onChange={onChangeHandler}ref={ref} autoFocus type="text" name="email" placeholder="Enter your email address" />
                </div>

                <div className="loginFormElement">
                    <input  onChange={onChangeHandler}type="password" name="password" placeholder="Password"/>
                </div>

                <div className="loginFormElement">
                    <input type="submit" value="Log In" disabled = {!(formState.isEmailValid && formState.isPasswordValid)} />
                </div>

                <div className="loginFormElement">
                    <Link className="loginFormLink" to='/forgot'>Forgot password?</Link>
                </div>
              
            </form>

            <div className="divider"></div>

            <div className="loginFormButton">
                <button onClick={props.onClick} className="createButton">Create New Account</button>
            </div>
        </div>
    );
});

export default LoginForm;
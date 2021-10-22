import axios from 'axios';
import React, { useRef, useState } from 'react';
import {Close} from '@material-ui/icons';
import { useHistory } from 'react-router';
import './Modal.scss';
const Modal = (props) => {

    // const[name,setName]=useState("");
    // const[email,setEmail]=useState("");
    // const[password,setPassword]=useState("");
    // const[confirmPassword,setConfirmPassword]=useState("");
    // const[date,setDate]=useState(null);
    // const[gender,setGender]=useState("");
    // const history =useHistory();

    //state for error
    const[nameError,setNameError]=useState("");
    const[emailError,setEmailError]=useState("");
    const[passwordError,setPasswordError]=useState("");
    const[confirmPasswordError,setConfirmPasswordError]=useState("");
    const[dateError,setDateError]=useState(null);
    const[genderError,setGenderError]=useState("");

    //declaring refs for getting input field value
    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();
    const dateRef=useRef();
    const maleRef=useRef();
    const femaleRef=useRef();

    //function for validation
    const isValid=(name,email,password,confirmPassword,date)=>{
        let isFormValid=1;
        if(name.length<4){
            if(name.length===0){
                setNameError("Username is required");
                isFormValid=0;
            }
            else{

                setNameError("Username must be at least 6 character");
                isFormValid=0;
            }
        }

        if(password.length<6){
            if(password.length===0){
                setPasswordError("Password is required");
                isFormValid=0;
            }
            else{

                setPasswordError("Password must be at least 6 character");
                isFormValid=0;
            }
        }

        if(confirmPassword.length===0){

            setConfirmPasswordError("Retype your password");
            isFormValid=0;

        }

        else if(password!==confirmPassword){

            setConfirmPasswordError("Password doesn't match");
            isFormValid=0;

        }
        if(!email.includes('@')){
            setEmailError('Enter a valid email address');
            isFormValid=0;
        }
        if(!maleRef.current.checked && !femaleRef.current.checked){
            setGenderError('Select male or female');
            isFormValid=0;
        }
        if(date.length===0){
            setDateError('Enter your date of birth');
            isFormValid=0;
        }

        return isFormValid;
    }


    //form submitting function
    const handleSubmit=(event)=>{
        setNameError("");
        setEmailError("");
        setPasswordError("");
        setConfirmPasswordError("");
        setDateError("");
        setGenderError("");
        const name=nameRef.current.value;
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        const confirmPassword=confirmPasswordRef.current.value;
        const date=dateRef.current.value;
        const gender=maleRef.current.checked? "Male": "Female";
        isValid(name,email,password,confirmPassword,date)

        const url = "http://localhost:8000/api/v1/register";
        // console.log({name,email,password,confirmPassword,date,gender})
        event.preventDefault();
        // axios
        // .post(url, {
        //     name: name,
        //     email: email,
        //     password: password,
        //     password_confirmation: confirmPassword,
        //     date_of_birth:date,
        //     gender:gender,
        
        // })
        // .then(res => {
        //     console.log(res)
            
        //   })
        //   .catch(err => {
        //      console.log('caught it!',err.response.data);
        //   });
    }


    const handleClick=()=>{
        props.onBlur();
    }

    const handleChange=(e)=>{

        const {name,value}=e.target;
        console.log(name," ",value);
    }

    
    
    return (
        <div className="modalWrapper" >
            <div className="modalFormContainer">
                <div className="modalTop">
                <h3>Sign Up</h3>
                <Close className="modalClose" onClick={handleClick}/>
                </div>
                <form  onSubmit={handleSubmit}  className="modalForm">
                    <div className="modalInputElement">
                        <input
                            autoFocus
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            ref={nameRef}
                        />
                        <p className="errorMessage"> <small> {nameError} </small></p>
                    </div>

                    <div className="modalInputElement">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            ref={emailRef}
                        />
                         <p className="errorMessage"> <small> {emailError} </small></p>
                    </div>

                    <div className="modalInputElement">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref={passwordRef}
                        />
                         <p className="errorMessage"> <small> {passwordError} </small></p>
                    </div>

                    <div className="modalInputElement">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Retype your password"
                            ref={confirmPasswordRef}
                        />
                         <p className="errorMessage"> <small> {confirmPasswordError} </small></p>
                    </div>
                    <div className="modalInputElement">
                        <p className="smallText"> <small>Date of birth ?</small> </p>
                        <input
                            type="date"
                            name="date"
                            ref={dateRef}
                        />
                         <p className="errorMessage"> <small> {dateError} </small></p>
                    </div>

                    <div className="modalInputElement">
                        <p className="smallText"> <small>Gender ?</small> </p>
                        <div className="modalRadioContainer">
                            <div className="gender">
                                <label htmlFor="male">Male</label>
                                <input
                                    type="radio"
                                    value="male"
                                    name="gender"
                                    id="male"
                                    ref={maleRef}
                                />
                                
                            </div>

                            <div className="gender">
                                <label htmlFor="female">Female</label>
                                <input
                                    type="radio"
                                    value="female"
                                    name="gender"
                                    id="female"
                                    ref={femaleRef}
                                />
                            </div>

                        </div>
                        <p className="errorMessage"> <small> {genderError} </small></p>
                    </div>

                    <div className="modalInputElement">
                    <input
                        type="submit"
                        value="SignUp"
                        disabled = {false}
                    />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
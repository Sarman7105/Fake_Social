import axios from 'axios';
import React, { useRef, useState } from 'react';
import {Close} from '@material-ui/icons';
import { useHistory } from 'react-router';
import './Modal.scss';
const Modal = (props) => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[date,setDate]=useState(null);
    const[gender,setGender]=useState("");
    const history =useHistory();

    //form submitting function
    const handleSubmit=(event)=>{

        const url = "http://localhost:8000/api/v1/register";
        // console.log({name,email,password,confirmPassword,date,gender})
        event.preventDefault();
        axios
        .post(url, {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            date_of_birth:date,
            gender:gender,
        
        })
        .then(res => {
            console.log(res)
            
          })
          .catch(err => {
             console.log('caught it!',err.response.data);
          });
    }


    const handleClick=()=>{
        props.onBlur();
    }

    const handleChange=(e)=>{

        const {name,value}=e.target;
        console.log(name," ",value);
    }

    const handleOnBlur=(e)=>{

        const{name,value}=e.target;
        if(name==='name'){
            setName(value);
        }

        if(name==='email'){
            setEmail(value);
        }

        if(name==='password'){
            setPassword(value);
        }

        if(name==='confirmPassword'){
            setConfirmPassword(value);
        }

        if(name==='date'){
            setDate(value);
        }

        if(name==='gender'){
            setGender(value);
        }
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
                        <input onBlur={handleOnBlur}  onChange={handleChange} autoFocus name="name" type="text" placeholder="Enter your name"/>
                    </div>

                    <div className="modalInputElement">
                        <input  onBlur={handleOnBlur} onChange={handleChange} type="email" name="email" placeholder="Enter your email address"/>
                    </div>

                    <div className="modalInputElement">
                        <input onBlur={handleOnBlur}  onChange={handleChange} type="password" name="password" placeholder="Password"/>
                    </div>

                    <div className="modalInputElement">
                        <input onBlur={handleOnBlur}  onChange={handleChange} type="password" name="confirmPassword" placeholder="Retype your password"/>
                    </div>
                    <div className="modalInputElement">
                        <p className="smallText"> <small>Date of birth ?</small> </p>
                        <input  onBlur={handleOnBlur} onChange={handleChange} type="date" name="date" placeholder="Password"/>
                    </div>

                    <div className="modalInputElement">
                        <p className="smallText"> <small>Gender ?</small> </p>
                        <div className="modalRadioContainer">
                            <div className="gender">
                                <label htmlFor="male">Male</label>
                                <input onBlur={handleOnBlur}  onChange={handleChange} type="radio" value="male" name="gender" id="male" />
                            </div>

                            <div className="gender">
                                <label htmlFor="female">Female</label>
                                <input  onBlur={handleOnBlur} onChange={handleChange} type="radio" value="female" name="gender" id="female" />
                            </div>

                        </div>
                    </div>

                    <div className="modalInputElement">
                    <input type="submit" value="Log In" disabled = {false} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;
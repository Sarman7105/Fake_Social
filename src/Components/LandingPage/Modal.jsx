import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import './Modal.scss';
const Modal = (props) => {
    const history =useHistory();
    const handleSubmit=()=>{
        history.push('/verify')
    }
    const handleClick=()=>{
        props.onBlur();
    }
    
    return (
        <div className="modalWrapper" >
            <div className="modalFormContainer">
                <div className="modalTop">
                <h3>Sign Up</h3>
                <span onClick={handleClick}>&#10060;</span>
                </div>
                <form  onSubmit={handleSubmit}  className="modalForm">
                    <div className="modalInputElement">
                        <input autoFocus  type="text" placeholder="Enter your name"/>
                    </div>

                    <div className="modalInputElement">
                        <input type="email" placeholder="Enter your email address"/>
                    </div>

                    <div className="modalInputElement">
                        <input type="password" placeholder="Password"/>
                    </div>

                    <div className="modalInputElement">
                        <input type="password" placeholder="Retype your password"/>
                    </div>
                    <div className="modalInputElement">
                        <p className="smallText"> <small>Date of birth ?</small> </p>
                        <input type="date" placeholder="Password"/>
                    </div>

                    <div className="modalInputElement">
                        <p className="smallText"> <small>Gender ?</small> </p>
                        <div className="modalRadioContainer">
                            <div className="gender">
                                <label htmlFor="male">Male</label>
                                <input type="radio" name="gender" id="male" />
                            </div>

                            <div className="gender">
                                <label htmlFor="female">Female</label>
                                <input type="radio" name="gender" id="female" />
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
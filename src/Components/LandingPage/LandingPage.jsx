import React, { createRef, useRef, useState } from "react";
import "./LandingPage.scss";
import LandingPageText from "./LandingPageText";
import LoginForm from "./LoginForm";
import Modal from "./Modal";

const LandingPage = () => {

  const[isRegistering,setIsRegistering]=useState(false);
  const handleOnClick=()=>{
    setIsRegistering(true);
    
  }

  const handleOnBlur=()=>{
    setIsRegistering(false);
    ref.current.focus();
  }

  const ref =createRef();
    

  return (
    <div className="landingPage">
      <div className="landingPageInner">
        <div className="container">
          <div className="itemsContainer">
            <LandingPageText />
            <LoginForm ref={ref} onClick={handleOnClick}/>
          </div>
        </div>
      </div>
      {
        isRegistering && <Modal onBlur={handleOnBlur} />
      }
      
    </div>
  );
};

export default LandingPage;

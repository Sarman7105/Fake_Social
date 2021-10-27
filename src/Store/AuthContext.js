import React,{useState,createContext} from 'react';
const AuthContext=createContext(
    {
        isAuth:null,
        setIsAuth:()=>{},
        user:null,
        setUser:()=>{},
        login:(token)=>{},
        logout: ()=>{},
    })

    const calculateRemainingTime=(expirationTime)=>{
        const currentTime=new Date().getTime();
        const adjExpirationTime=new Date(expirationTime).getTime();
        const remainingDuration=adjExpirationTime-currentTime;
        return remainingDuration;
    }

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const[isAuth,setIsAuth]=useState(false);
    const [user,setUser]=useState({});
    return (
        <AuthContext.Provider
            value={
                {
                    
                    isAuth:isAuth,
                    setIsAuth:setIsAuth,
                    user:user,
                    setUser:setUser
                
                }
            }
        >
            {props.children}
            
        </AuthContext.Provider>
    );
};

export default AuthContext;



// import React, { useState, useEffect, useCallback } from 'react';

// let logoutTimer;

// const AuthContext = React.createContext({
//   token: '',
//   isLoggedIn: false,
//   login: (token) => {},
//   logout: () => {},
// });

// const calculateRemainingTime = (expirationTime) => {
//   const currentTime = new Date().getTime();
//   const adjExpirationTime = new Date(expirationTime).getTime();

//   const remainingDuration = adjExpirationTime - currentTime;

//   return remainingDuration;
// };

// const retrieveStoredToken = () => {
//   const storedToken = localStorage.getItem('token');
//   const storedExpirationDate = localStorage.getItem('expirationTime');

//   const remainingTime = calculateRemainingTime(storedExpirationDate);

//   if (remainingTime <= 3600) {
//     localStorage.removeItem('token');
//     localStorage.removeItem('expirationTime');
//     return null;
//   }

//   return {
//     token: storedToken,
//     duration: remainingTime,
//   };
// };

// export const AuthContextProvider = (props) => {
//   const tokenData = retrieveStoredToken();
  
//   let initialToken;
//   if (tokenData) {
//     initialToken = tokenData.token;
//   }

//   const [token, setToken] = useState(initialToken);

//   const userIsLoggedIn = !!token;

//   const logoutHandler = useCallback(() => {
//     setToken(null);
//     localStorage.removeItem('token');
//     localStorage.removeItem('expirationTime');

//     if (logoutTimer) {
//       clearTimeout(logoutTimer);
//     }
//   }, []);

//   const loginHandler = (token, expirationTime) => {
//     setToken(token);
//     localStorage.setItem('token', token);
//     localStorage.setItem('expirationTime', expirationTime);

//     const remainingTime = calculateRemainingTime(expirationTime);

//     logoutTimer = setTimeout(logoutHandler, remainingTime);
//   };

//   useEffect(() => {
//     if (tokenData) {
//       console.log(tokenData.duration);
//       logoutTimer = setTimeout(logoutHandler, tokenData.duration);
//     }
//   }, [tokenData, logoutHandler]);

//   const contextValue = {
//     token: token,
//     isLoggedIn: userIsLoggedIn,
//     login: loginHandler,
//     logout: logoutHandler,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
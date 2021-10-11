import React,{useState,createContext} from 'react';
const AuthContext=createContext(
    {
        isAuth:null,
        setIsAuth:()=>{},
        user:null,
        setUser:()=>{}
    })

export const AuthContextProvider = (props) => {
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
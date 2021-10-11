import axios from "axios";
import React, { useState } from "react";
import "./LoginForm.scss"

const LoginForm = () => {
    // const url = "http://localhost:8000/api/v1/user/login";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogout=()=>{


        // const config = {
        //     headers: { Authorization: `Bearer ${token}` }
        // };
        
        // const bodyParameters = {
        //    key: "value"
        // };
        
        // Axios.post( 
        //   'http://localhost:8000/api/v1/get_token_payloads',
        //   bodyParameters,
        //   config
        // ).then(console.log).catch(console.log);


         //Axios to send loging request
        // axios
        // .post(url, {
        //     email: email,
        //     password: password,
        // })
        // .then((response) => {
        //     console.log(response.data.data);
        //     if(response){
        //         console.log(response.data.data.access_token);
        //     }
        //     else{
        //         console.log('error occured');
        //     }
        // });
    };
    

    const handleOnSubmit = (event) => {
        event.preventDefault();

       

        // localStorage.setItem('isLoggedIn',true);
        console.log('item is set')
    };

    const handleOnBlur = (event) => {
        const { name, value } = event.target;
        console.log(name, value);

        if (name === "email") {
        setEmail(value);
        }

        if (name === "password") {
        setPassword(value);
        }

    };

    return (
        <div>
            <form onSubmit={handleOnSubmit}>

                <div>
                    <label htmlFor="name">Email:</label>
                    <input id="email" name="email" type="text" onBlur={handleOnBlur} />
                </div>

                <div className="textRed">
                    <label  htmlFor="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onBlur={handleOnBlur}
                    />
                </div>


                <div>
                    <button>Login</button>
                </div>

            </form>
        </div>
  );
};

export default LoginForm;

import React, { useState } from 'react';
import AuthContext from './AuthContext.js';
import axios from 'axios';

function AuthContextProvider({children}) {

    const server = axios.create({
      baseURL: `${import.meta.env.VITE_API_BACKEND_URL || "http://localhost:8060/"}`
    });

    const [token, setToken] = useState("");

    let handleSignUp = async(firstname, lastname, email, password)=>
    {
        try {
          let response = await server.post("/signup", {
            firstname,
            lastname,
            email,
            password
          });
          console.log("signup",response);
          if(response.status == 201)
          {
            setToken((preVal)=> preVal = response.data.token);
            return {status: 201, message: response.data.message}
          }
          else
          {
            console.log(response);
            return {status: response.status, message: response.response.data.message};
          }
        } catch (error) {
          console.log(error)
          return {status: error.status, message: error.response ? error.response.data.message : error.message};
        }
    }

    let handleLogin = async(email, password)=>
    {
      try {
        let response = await server.post("/login", {
          email,
          password
        });
  
        console.log("login", response);
  
        if(response.status === 200)
        {
          setToken((preVal)=> preVal = response.data.token);
          return {status: 200, message: response.data.message}
        }
        else
        {
          return {status: response.status, message: response.response.data.message};
        }
      } catch (error) {
        console.log(error);
        return {status: error.status, message: error.response ? error.response.data.message : error.message};
      }
    }

    let handleLogout = ()=>
    {
      setToken((preVal)=> preVal = "");
    }


  return (
    <>
    <AuthContext.Provider value={{token, handleSignUp, handleLogin, handleLogout}}>
      {children}
    </AuthContext.Provider>
    </>
  )
}

export default AuthContextProvider

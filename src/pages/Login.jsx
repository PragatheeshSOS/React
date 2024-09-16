import React from 'react'
import App from '../App'
import NavBar from "./Login";

const Login = () => {
    const data ={
        AppName: "AAA",
        Appdata: "DDDD"
    }
  return (
    <>
    <div className='h-screen w-screen flex flex-col'>
        <NavBar data={data} />
        {/* Login */}
        </div>
    </>
  )
}

export default Login;
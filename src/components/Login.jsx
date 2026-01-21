import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext';

const Login = () => {
    const {setShowUserLogin,setUser}=useAppContext();

    const [state,setState]=useState("register")
    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({
            email:"test@gmail.com"

        })
        setShowUserLogin(false)
    }
  return (
    <div onClick={()=>setShowUserLogin(false)} className='fixed z-30 bg-black/50 flex items-center inset-0 justify-center'>
      <form onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()}action="" className='border border-gray-300 w-80 flex flex-col p-6 shadow-xl rounded-lg bg-white'>
        <h3 className='text-2xl font-medium text-center mt-3'><span className='text-primary'>User</span> {state=='login'?"Login":"Sign Up"}</h3>
        {state == "login"? "":(
        <div className='w-full mt-5'>
        <p className='text-sm text-gray-500 mb-2'>Name</p>
        <input type="text" name="" id="" placeholder='Enter your name' className='border border-gray-200 text-sm p-2 w-full outline-primary' value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
            )}
        <div className='w-full mt-5'>
        <p className='text-sm text-gray-500 mb-2'>Email</p>
        <input type="email" name="" id="" placeholder='Enter your email' className='border border-gray-200 text-sm p-2 w-full outline-primary' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
         <div className='w-full mt-5'>
        <p className='text-sm text-gray-500 mb-2'>Password</p>
        <input type="password" name="" id="" placeholder='Enter your password' className='border border-gray-200 text-sm p-2 w-full outline-primary' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>

        {state === "register" ? (
                <p className='text-sm text-gray-500 mt-5'>
                    Already have account? <span onClick={() => setState("login")} className="text-primary text-sm cursor-pointer">click here</span>
                </p>
            ) : (
                <p  className='text-sm text-gray-500 mt-5'>
                    Create an account? <span onClick={() => setState("register")} className="text-primary text-sm cursor-pointer">click here</span>
                </p>
            )}
        <button type='submit' className='mt-5 bg-primary p-2 rounded-lg outline-none text-sm text-white cursor-pointer'> {state=="login"?"Login":"Sign Up"}</button>
      </form>
    </div>
  )
}

export default Login

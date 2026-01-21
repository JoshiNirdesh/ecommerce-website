import React from 'react'

const Login = () => {
  return (
    <div className='fixed z-30 bg-black/50 flex items-center inset-0 justify-center'>
      <form action="" className='border border-gray-300 w-80 flex flex-col p-6 shadow-xl rounded-lg bg-white'>
        <h3 className='text-2xl font-medium text-center mt-3'>User Login</h3>
        <div className='w-full mt-5'>
        <p className='text-sm text-gray-500 mb-2'>Email</p>
        <input type="email" name="" id="" placeholder='Enter your email' className='border border-gray-200 text-sm p-2 w-full' />
        </div>
         <div className='w-full mt-5'>
        <p className='text-sm text-gray-500 mb-2'>Password</p>
        <input type="password" name="" id="" placeholder='Enter your password' className='border border-gray-200 text-sm p-2 w-full' />
        </div>

        <p className='mt-5 text-sm text-gray-500'>Create an account ? <a href="" className='text-primary'>Click here</a></p>
        <button className='mt-5 bg-primary p-2 rounded-lg outline-none text-sm text-white'>Login</button>
      </form>
    </div>
  )
}

export default Login

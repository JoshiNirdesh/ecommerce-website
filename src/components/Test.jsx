import React from 'react'

const Test = () => {
  return (
    <div>
        <button className='bg-red-500 px-3 py-4 text-white rounded'>Click me</button>
        <p className='text-xl font-bold text-red'>Hello</p>
        <div className='p-4 m-2'>Box</div>
        <div className='flex flex-col items-center justify-between'>
            <div>Logo</div>
            <div>Logout</div>
        </div>
        <button className='bg-red-500 p-2 hover:bg-green-500 text-white text-sm font-bold rounded-xl hover:bg-green-500'>Hover me</button>
        <div className='border rounded-xl shadow-lg p-4'>Card</div>
    </div>
  )
}

export default Test

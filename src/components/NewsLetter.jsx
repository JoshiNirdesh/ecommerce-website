import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center mt-24 pb-14 text-center'>
        <h1 className='md:text-4xl text-2xl font-medium '>Never Miss a Deal!</h1>
        <p className='text-sm m-2 text-gray-500/70 pb-8'>Subscribe to get the latest offers, new arrivals, and exclusive discounts</p>
        <form action="" className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'>
            <input className='border border-gray-300 w-full h-full rounded border-r-0 outline-none p-3 rounded-r-none text-gray-500' type="text"
             placeholder='Enter your email id' />
             <button className='bg-primary h-full rounded px-12 text-white hover:bg-primary-dull transition-all cursor-pointer rounded-l-none' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter

import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSellers = () => {
  const {products} = useAppContext()
  return (
    <div className='mt-16 flex flex-col items-center'>
        <p className='text-2xl md:text-3xl font-medium'>Best Sellers</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:grid-cols-5 mt-6 items-center">
          {products.filter((products)=> products.inStock).slice(0,5).map((product,index)=>(
               <ProductCard key={index} product={product}/>
          ))}
         
        </div>
    </div>
  )
}

export default BestSellers

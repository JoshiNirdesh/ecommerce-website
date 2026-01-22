import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';

const AllProducts = () => {

    const [filterProducts,setFilterProducts]=useState([]);
    const {products,searchQuery}=useAppContext();

    useEffect(()=>{
        if(searchQuery.length>0){
            setFilterProducts(products.filter(product=>product.name.toLowerCase().includes(searchQuery.toLowerCase())))
        }
        else{
            setFilterProducts(products)
        }
    },[products,searchQuery])
  return (
    <div className='mt-16'>
            <p className='text-2xl font-medium uppercase'>All Products</p>
            <div className='bg-primary h-0.5 w-16 rounded-full'></div>

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>
            {filterProducts.filter((products)=>products.inStock).map((products,index)=>(
                <ProductCard key={index} product={products}/>
            ))}
            </div>
      
    </div>
  )
}

export default AllProducts

import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom';
import { categories } from '../assets/greencart_assets/assets';
import ProductCard from '../components/ProductCard';

const ProductCategory = () => {
    const {products} = useAppContext();
    const {category}=useParams();

    const searchCategory = categories.find((item)=>item.path.toLowerCase()===category.toLowerCase())
    const filteProducts = products.filter((products)=>products.category.toLowerCase()===category.toLowerCase())
  return (
    <div className='mt-16'>
        {searchCategory && ( <div> <p className='text-2xl font-medium uppercase'>{searchCategory.text}</p>
        <div className='bg-primary h-0.5 w-16'></div></div>)}

       {filteProducts.length>0? (  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6'>{filteProducts.map((products,index)=>(
        <ProductCard key={index} product={products}/>
       ))}</div>):(<div><p>No Products Found</p></div>
       )}
    </div>
  )
}

export default ProductCategory

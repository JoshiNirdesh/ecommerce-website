import { useState } from "react";
import { assets } from "../assets/greencart_assets/assets";

const ProductCard = ({product}) => {
    const [count, setCount] = useState(0);



    return (   <div className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 max-w-56 min-w-56 w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26"src={product.image[0]} alt="" />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
            </div>
              <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                           <img key={i} className="md:3.5 w-3" src = {i<4? assets.star_icon:assets.star_dull_icon}/>
                       
                    ))}
                    <p>({product.rating})
                    </p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base  font-medium text-indigo-500">${product.offerPrice} <span className="text-gray-500/60 md:text-sm text-xs line-through">${product.price}</span></p>
                    <div className="text-indigo-500">
                        {count == 0 ? (<button className="flex items-center justify-center gap-1 bg-indigo-100 border border-indigo-30 px-2 py-1 rounded font-medium text-indigo-600" onClick={()=>setCount(1)}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0" stroke="#615fff" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            Add</button>):(
                                 <div className="bg-indigo-100 flex items-center justify-center px-3 py-2 rounded" >
                                <button className="cursor-pointer text-md h-full" onClick={()=>setCount(prevCount=>prevCount-1)} >-</button>
                                  <span className="w-5 text-center">  {count}</span>
                                <button className="cursor-pointer text-md h-full" onClick={()=>setCount(prevCount=>prevCount+1)}>+</button> 
                            </div>)}
                        
                           
                    </div>
                </div>
    </div>  )
};
export default ProductCard

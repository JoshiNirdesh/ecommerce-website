import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/greencart_assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products ,setProducts]=useState([]);
    const [searchQuery,setSearchQuery]=useState("");

    const [cartItems ,setCartItems]=useState({});

    const fetchProducts = ()=>{
        setProducts(dummyProducts);
    }
    useEffect(()=>{
        fetchProducts()
    },[])

    const addToCart = (itemId)=>{
        console.log(cartItems)
        let cartData = structuredClone(cartItems)
        console.log(cartData)
        if(cartData[itemId]){
            cartData[itemId]+=1
        }
        else{
            cartData[itemId]=1
        }
         setCartItems(cartData)
         toast.success("Added to cart")

    }

    const removeFromCart = (itemId)=>{
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            cartData[itemId]-=1
            if(cartData[itemId]===0){
                delete cartData[itemId];
            }
        }
        toast.success("Removed from Cart")
        setCartItems(cartData)
    }
    const updateCartItem =(itemId,quantity)=>{
        let cartData = structuredClone(cartItems)
        cartData[itemId]=quantity
        setCartItems(cartData);
        toast.success("cart updated")
    } 

    const value = { navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin,products,addToCart,updateCartItem,removeFromCart,cartItems,searchQuery,setSearchQuery };
    return (

        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(AppContext)
}


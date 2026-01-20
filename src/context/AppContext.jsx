import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/greencart_assets/assets";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products ,setProducts]=useState([]);

    const fetchProducts = ()=>{
        setProducts(dummyProducts);
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    const value = { navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin,products };
    return (

        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(AppContext)
}


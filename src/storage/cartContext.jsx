import { createContext,useState } from "react";

export const cartContext = createContext ();

export function CartContextProvider(props){

    let [cart,setCart]= useState([]);
    const value= {cart, setCart, addItem, getTotalItems,clearCart,removeItem,getSubTotalPrice, getTotalPriceInCart}

    function addItem(item, conteo) {
        const isInCart = cart.some((itemInCart) => itemInCart.id === item.id)

        if(isInCart){
            let newCart = [...cart]
            let index = cart.findIndex((itemInCart) => itemInCart.id === item.id)    
            newCart[index] = {...newCart[index], conteo: newCart[index].conteo + conteo}
            setCart(newCart)
        }
        else{
            let newCart = [...cart]
            item.conteo = conteo
            newCart.push(item)
            setCart(newCart)
        }
    }

    function removeItem(id){
        let newCart = cart.filter((item)=> item.id !== id)
        setCart(newCart)

    }

    function clearCart(){
        setCart([])
    }

    function getTotalItems(){
        let total = 0
        cart.forEach((item) => total += item.conteo );
        return total
    }

    function getTotalPriceInCart(){
        let total = 0
        cart.forEach((item) => total += item.price * item.conteo)
        return total

    }

    function getSubTotalPrice(price,conteo){
        let subTotal = price * conteo
        return subTotal
    }


    return (
        <cartContext.Provider value={value}>
            {props.children}   
        </cartContext.Provider>

    );
}
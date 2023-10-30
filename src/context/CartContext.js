import React from 'react'
import {createContext, useState } from "react";

//creo mi context 
export const CartContext = createContext({
    cart:[]
})
//funcion que va a contener toda la lógica del carrito de compras 
export const CartProvider =({children})=> {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem =(item, quantity)=>{
        const totalByProduct = item.precio * quantity
        if (!inInCart(item.id)){
            setCart(prev => [...prev, {...item, quantity, totalByProduct}])
        } else{
            console.error('El producto ya fue agregado')
        }
    }
    const removeItem = (itemId)=>{
        const cartUpdate= cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }
    const clearCart =()=> {
        setCart([])
    }
    const inInCart =(itemId)=>{
        return cart.some(prod => prod.id === itemId)
    }
    const total =()=>{
        return cart.reduce((accumulator, object)=> {
            return accumulator + object.totalByProduct
        }, 0)
    }
    const totalQuantity= ()=>{
        return cart.reduce((accumulator, object)=> {
            return accumulator + object.quantity
        }, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, total, totalQuantity}}>
            {children}
        </CartContext.Provider>
    )
}
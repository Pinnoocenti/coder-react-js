 import "./style.css"
 import cart from './assets/cart.svg'
 import { useContext } from "react"
 import { CartContext } from "../../context/CartContext"
 import { Link } from "react-router-dom"
 
 const CartWidget = ()=>{
    const {totalQuantity} = useContext(CartContext)

    return(
        <Link to='/cart' className="carrito" /*style={{display: totalQuantity > 0 ? 'block' : 'none'}}*/>
            <img src={cart} alt="cart-widget"/>
            <div className="totalQuantity">{totalQuantity()}</div>
        </Link>
    
    )
 }

 export default CartWidget
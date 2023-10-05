 import "./style.css"
 import cart from './assets/cart.svg'
 
 const CartWidget = ()=>{

    return(
        <div className="carrito">
         <img src={cart} alt="cart-widget"/>
         <div> 0</div>
        </div>
    )
 }

 export default CartWidget
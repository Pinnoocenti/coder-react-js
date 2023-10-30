import "./style.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"


const Cart = ()=>{
    const {cart, clearCart, total}=useContext(CartContext)

    if(total === 0){
        return(
            <div>
                <h2>No hay productos en el carrito</h2>
                <Link to='/' className="boton">Home</Link>
            </div>
        )
    }
    return(
        <div>
            {cart.map(prod=> <CartItem key={prod.id} {...prod}/>)}
            <h4>Total: $ {total()}</h4>
            <div>
                <button onClick={()=> clearCart()} className="boton">Limpiar carrito</button>
                <Link to='/' className="seguirComprando">Seguir comprando</Link>
                <Link to='/checkout' className="finalizar">Finalizar compra</Link>
            </div>
        </div>
    )
}
 export default Cart

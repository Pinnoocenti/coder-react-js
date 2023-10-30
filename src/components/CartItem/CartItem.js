import "./style.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CartItem = ({nombre, precio, id, colorSeleccionado, talleSeleccionado, totalByProduct, quantity})=> {
    const {removeItem}=useContext(CartContext)
    return(
        <div className="cart">
            <h4 className="card-title">{nombre}</h4>
            <h6 className="precio">Color: {colorSeleccionado}</h6 >
            <h6 className="precio">Talle: {talleSeleccionado}</h6 >
            <h6 className="precio">Cantidad: {quantity}</h6>
            <h6 className="precio">Precio productos ${totalByProduct}</h6>
            <button onClick={()=> removeItem(id)} className="boton">X</button>
        </div>
    )

}

export default CartItem
import "./style.css"
import { useState } from "react"

const Contador = ({initial, stock, onAdd})=>{
    const [quantity, setQuantity] = useState(0)

    const increment = () =>{
        if (quantity < stock){
            setQuantity (quantity+1)
        }
    }
    const decrement = ()=>{
        if(quantity >= 1){
            setQuantity(quantity-1)
        }
    }
    return(
        <div className='Counter'> 
            <div className='Controles'> 
                <button className='boton' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='boton' onClick={increment}>+</button>
            </div>
            <div>
                <button className='boton' onClick={()=> onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>

    )

}

export default Contador
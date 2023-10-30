import "./style.css"
import { useState } from "react"


const Contador = ({initial, onAdd, disable})=>{
    const [quantity, setQuantity] = useState(0)

    const increment = () =>{
        setQuantity(quantity+1)
    }
    const decrement = ()=>{
        if(quantity >= 1){
            setQuantity(quantity-1)
        }
    }
    return(
        <div className='counter'> 
            <div className='controles'> 
                <button className='boton' onClick={decrement}>-</button>
                <h4 className='number'>{quantity}</h4>
                <button className='boton' onClick={increment}>+</button>
            </div>
            <div>
                <button className='boton' onClick={()=> onAdd(quantity)} disabled={disable || !quantity}>
                    Agregar al carrito
                </button>
            </div>

        </div>

    )

}

export default Contador
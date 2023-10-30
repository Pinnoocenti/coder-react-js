import "./style.css"
import Contador from "../Contador/Contador"
import images from "../ImagesImporter/ImagesImporter"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({producto, colorSeleccionado, talleSeleccionado,}) => {
    const {nombre, descripcion, precio, imagen, id, colorButtons, tallesButtons} = producto
    const [quantityAdded, setQuantityAdded]=useState(0)
    const {addItem} = useContext(CartContext)

    const handdleOnAdd =(quantity) =>{
        setQuantityAdded(quantity)
        const item ={
            id, nombre, precio, colorSeleccionado, talleSeleccionado
        } 
        addItem(item, quantity)
    }

    return(
        <div>
            <article className="card">
                <div className="card-body">
                    <h3 className="card-title">{nombre}</h3>
                    <p className="card-text">{descripcion}</p>
                    <h5 className="precio">${precio}</h5>
                    <img className="imagen" src={images[imagen]} alt={imagen} height='30%' width='30%'/>
                    <div >{colorButtons}</div>
                    <h5 >{tallesButtons}</h5>
                </div>
                <div>
                    {
                        quantityAdded > 0 ?(
                            <Link className="boton" to='/cart'>Ir al carrito</Link>
                        ) :(
                            <Contador onAdd={handdleOnAdd} 
                            initial={1}
                            disable={!colorSeleccionado || !talleSeleccionado}/>
                        )
                    }
                    
                </div>
                
            </article>
        </div>
    )
}

export default ItemDetail
import "./style.css"
import Contador from "../Contador/Contador"

const ItemDetail = ({nombre, descripcion, talle, precio, img, color, categoría, id}) => {

    return(
        <div>
            <article className="card">
                <div className="card-body">
                    <h3 className="card-title">{nombre}</h3>
                    <p className="card-text">{descripcion}</p>
                    <h5 className="precio">${precio}</h5>
                    <h5 >{color}</h5>
                    <h5 >{talle}</h5>
                </div>
                <div>
                    <Contador initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
                </div>
                
            </article>
        </div>
    )
}

export default ItemDetail
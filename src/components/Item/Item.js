import "./style.css"
import { Link } from "react-router-dom"

const Item = ({nombre, descripcion, talle, precio, img, color, categoria,id})=> {
    return(
        <div>
            <article className="card">
                <div className="body">
                    <h3 className="card-title">{nombre}</h3>
                    <p className="text">{descripcion}</p>
                    <h5 className="precio">${precio}</h5>
                    <h5 className="precio">{color}</h5>
                    <Link to={`/item/${id}`} className="boton">Ver detalle</Link>
                </div>
            </article>
        </div>
    )
}
export default Item
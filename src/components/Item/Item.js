import "./style.css"
import { Link } from "react-router-dom"
import images from "../ImagesImporter/ImagesImporter"

const Item = ({nombre, descripcion, tallesButtons, precio, imagen, colorButtons, categoria,id})=> {
    return(
        <div>
            <article className="card">
                <div className="body">
                    <h3 className="card-title">{nombre}</h3>
                    <p className="text">{descripcion}</p>
                    <img className="imagen"src={images[imagen]} alt={imagen} height='30%' width='30%'/>
                    <h5 className="precio">${precio}</h5>
                    <Link to={`/item/${id}`} className="boton">Ver detalle</Link>
                </div>
            </article>
        </div>
    )
}
export default Item
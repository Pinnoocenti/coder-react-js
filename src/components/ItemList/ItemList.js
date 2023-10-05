import Item from "../Item/Item"
import "./style.css"

const ItemList = ({productos}) =>{

    return(
        <div className="productos">
            {productos.map(prod=> <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList
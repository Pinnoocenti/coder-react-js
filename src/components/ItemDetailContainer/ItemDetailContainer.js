import "./style.css"
import { useState, useEffect } from "react"
import { getProductById } from "../../data/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProducto]=useState(null)
    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(res => {
            console.log(res)
            setProducto(res)
        })
        .catch(error => {
            console.error(error)
        })
    }, [itemId])

    return(
        <div className="detalle">
            <ItemDetail {...producto}/>
        </div>
    )


}
export default ItemDetailContainer
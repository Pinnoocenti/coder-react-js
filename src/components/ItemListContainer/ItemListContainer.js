import { useEffect, useState } from "react"
import "./style.css"
import { getProductBy, getProductos, getProductByCategory } from "../../data/data"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"



const ItemListContainer = ({greeting})=>{
    const [productos, setProductos] = useState([])
    const {categoria} = useParams()

    useEffect(()=> {
        const asyncFunc = categoria ? getProductByCategory : getProductos

        asyncFunc(categoria)
        .then(res => {
            setProductos(res)
        })
        .catch(error =>{
            console.error(error)
        })
    }, [categoria])

    return(
        
        <div className="productos">

            <ItemList productos={productos}/>  
        </div>


    )
}
export default ItemListContainer
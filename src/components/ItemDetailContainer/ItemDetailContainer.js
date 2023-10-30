import "./style.css"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams } from "react-router-dom"
import {getDoc, doc} from 'firebase/firestore'
import { db } from "../.."


const ItemDetailContainer = () => {
    const [colorSeleccionado, setColorSeleccionado] = useState('')
    const [talleSeleccionado, setTalleSeleccionado] = useState('')
    const [producto, setProducto]=useState({})
    const [loading, setLoading]= useState(true)
    const {itemId} = useParams()

    

    useEffect(()=>{
        setLoading(true)
        
        const docRef= doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((res=>{
                const data= res.data()
                const colors= Object.keys(data.stock)
                let tallesButtons
                console.log(colorSeleccionado)
                if (colorSeleccionado){
                    const talles = data.stock[colorSeleccionado]
                    tallesButtons= Object.keys(talles).map((talle, index)=>(
                            <button className={talle === talleSeleccionado ? 'talleSeleccionado' : ''} disabled={talles[talle] <= 0} onClick={() => setTalleSeleccionado(talle)} key={index}>{talle}</button>
                        ))
                }

                const colorButtons = colors.map((color, index)=>(
                    <button className={color === colorSeleccionado ? 'colorSeleccionado': ''} onClick={() => setColorSeleccionado(color)} key={index}>{color}</button>
                ))
                
                const productItem= {id: res.id, ...data, colorButtons, tallesButtons}
                setProducto(productItem)
            }))
            .catch(error => {
                console.error(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [itemId, colorSeleccionado, talleSeleccionado])

    return(
        <div className="detalle">
            <ItemDetail producto={producto} colorSeleccionado={colorSeleccionado} talleSeleccionado={talleSeleccionado} />
        </div>
        
    )


}
export default ItemDetailContainer

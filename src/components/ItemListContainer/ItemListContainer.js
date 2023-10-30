import { useEffect, useState } from "react"
import "./style.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { db } from "../.."
import { collection, getDocs, query, where } from "firebase/firestore"




const ItemListContainer = ({greeting})=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading]=useState(true)
    const {categoria} = useParams()

    
    useEffect(()=> {
        setLoading(true)
        
        const collectionRef = categoria
        ? query(collection(db, 'productos'), where('categoria', '==', categoria))
        : query(collection(db, 'productos'))

        console.log('collectionRef: ' + JSON.stringify(collectionRef))

        getDocs(collectionRef)
            .then((res)=>{
                
                const productsItems = res.docs.map(doc=> {
                    const data = doc.data()

                    return {id: doc.id, ...data}
                })
                setProductos(productsItems)
            })
            .catch(error =>{
                console.error(error)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [categoria])

    return(
        
        <div className="productos">
            <ItemList productos={productos}/>  
        </div>


    )
}
export default ItemListContainer
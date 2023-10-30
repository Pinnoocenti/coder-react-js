import "./style.css"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, documentId, getFirestore, query, where, writeBatch, getDocs, getDoc } from "firebase/firestore"
import { db } from "../.."
import CheckoutForm from "../CheckoutForm/CheckoutForm"


const Checkout = ()=>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId ] = useState('')

    const {cart, total, clearCart}= useContext(CartContext)

    const createOrder = async({name, phone, email})=>{
        setLoading(true)
        try {
            const order ={
                buyer: {name, phone, email},
                items: cart,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            
            const outOfStock = []
            const ids = cart.map(prod=> prod.id)
            const productsRef = collection(db, 'productos')
            const productsAddedFromFirestore = await getDocs(query(productsRef,where(documentId(), 'in', ids)))
            const {docs} = productsAddedFromFirestore
            console.log(docs)
            for (let i = 0; i < cart.length; i++) {
                const element = cart[i];
                let stockDisponible = 0
                docs.forEach(doc => {
                    const dataDoc= doc.data()
                    const updates = {}
                    if(dataDoc.stock[element.colorSeleccionado]&& dataDoc.stock[element.colorSeleccionado][element.talleSeleccionado]){
                        stockDisponible = dataDoc.stock[element.colorSeleccionado][element.talleSeleccionado]
                        if(stockDisponible > element.quantity){
                            const nuevoStock = stockDisponible - element.quantity
                            const stockPath = `stock.${element.colorSeleccionado}.${element.talleSeleccionado}`;
                            updates[stockPath] = nuevoStock
                            batch.update(doc.ref, updates)
                        } else{
                            outOfStock.push({id: doc.id, ...dataDoc})
                        }
                    }
                });
                
            }
            if(outOfStock.length === 0){
                await batch.commit()
                console.log("bieen ")
                const ordersCollections= collection(db, 'orders')
                const orderAdded = await addDoc(ordersCollections, order)

                setOrderId(orderAdded.id)
                clearCart()
            }
        } catch (error) {
            console.error(error)
        }
        finally{
            setLoading(false)
        }
        
    }

    if (loading){
        return <h2>Se esta generando su orden...</h2>
    }

    if(orderId){
        return <h2>Su número de orden es: {orderId}</h2>
    }
    return(
        <div>
            <h2>Checkout</h2>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}
export default Checkout
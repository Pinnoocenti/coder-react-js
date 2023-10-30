import "./style.css"
import { useState } from "react"

const CheckoutForm = ({onConfirm})=>{
    const [name, setName]=useState('')
    const [phone, setPhone]=useState('')
    const [email, setEmail]=useState('')

    const handleConfirm =(e)=>{
        e.preventDefault()

        const userData={
            name, phone, email
        }

        onConfirm(userData)
    }

    
    return(
        <div className="form">
            <form className="mb-3" onSubmit={handleConfirm}>
                <label className="form-label">
                    Nombre
                    <input
                    className="form-control"
                    type="text"
                    value={name}
                    onChange={({target})=> setName(target.value)}/>
                </label>
                <label className="form-label">
                    Telefono
                    <input
                    className="form-control"
                    type="text"
                    value={phone}
                    onChange={({target})=> setPhone(target.value)}
                    />
                </label>
                <label className="form-label">
                    Email
                    <input
                    className="form-control"
                    type="email"
                    value={email}
                    onChange={({target})=> setEmail(target.value)}/>
                </label>
                <div >
                    <button type="submit" className="boton">Crear orden</button>
                </div>

            </form>

        </div>
    )

}
export default CheckoutForm
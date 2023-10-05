import React from 'react'
import NavBar from "../NavBar/NavBar"
import "./style.css"


const Header = ()=> {

    return(
        <div className="header">
            <p className="encabezado">3 PAGOS SIN INTERES / 15% off TRANSFERENCIA</p>
            <p className="encabezado2">ENVIOS A TODO EL PAÍS</p>
            <NavBar/>
        </div>

        
    )
}
export default Header
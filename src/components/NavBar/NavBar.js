import "./style.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = ()=>{
    return(
        <nav className="navBar">
            <h1>TUESTE</h1>
            <div >
                <button className="items" >CAFETERÍA</button>
                <button className="items" >JUGOS</button>
                <button className="items" >PASTELERÍA</button>
                <button className="items" >SANDWICHES</button>
                <button className="items" >DESAYUNOS Y MERIENDAS</button>
            </div>
            <CartWidget/>
        </nav>

    )
}
export default NavBar
import "./style.css"
import OfeliaColor from '../../Images/OfeliaColor.png'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = ()=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body">
            <div className="container-fluid">
                <img className="logo" src={OfeliaColor} alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                        </li>
                        <li className="nav-item"
                            ><NavLink className="nav-link" to={`/categoria/calzas`}>Calzas</NavLink>
                            </li>
                        <li className="nav-item"
                            ><NavLink className="nav-link" to={`/categoria/pantalones`}>Pantalones</NavLink>
                            </li>
                        <li className="nav-item"
                            ><NavLink className="nav-link" to={`/categoria/shorts`}>Shorts</NavLink>
                            </li>
                        <li className="nav-item"
                            ><NavLink className="nav-link" to={`/categoria/tops`}>Tops</NavLink>
                            </li>
                        <li className="nav-item"
                            ><NavLink className="nav-link" to={`/categoria/remeras`}>Remeras</NavLink>
                            </li>
                        <li className="nav-item"
                            ><NavLink className="nav-link" to={`/categoria/abrigos`}>Abrigos</NavLink>
                            </li>
                        <li className="nav-item"
                            ><NavLink className="nav-link" to={`/categoria/mallas`}>Mallas</NavLink>
                            </li>
                        

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                            </a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to={`/categoria/calzas`}>Calzas</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/pantalones`}>Pantalones</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/shorts`}>Shorts</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/tops`}>Tops</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/remeras`}>Remeras</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/abrigos`}>Abrigos</NavLink></li>
                                <li><NavLink className="dropdown-item" to={`/categoria/mallas`}>Mallas</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>

    )
}
export default NavBar
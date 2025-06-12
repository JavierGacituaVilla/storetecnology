import React from "react";
import './Navbar.css';

const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div className="navbar-title">Tiendita Tech AG</div>
            <ul className="navbar-links">
                <li>Quienes Somos</li>
                <li>Ubicación</li>
                <li><i class="bi bi-cart me-2"></i> Carrito</li>
            </ul>
        </nav>
    )
}

export default Navbar;
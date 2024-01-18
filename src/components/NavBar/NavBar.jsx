import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import cartLogo from "../../assets/cartLogo.png";
import TotalCart from "../TotalCart/TotalCart";
import "./NavBar.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cart } = useContext(DataContext);
    return (
        <nav className="navbar_container" onClick={() => setIsOpen(!isOpen)}>
            <div className={`navbar_items ${isOpen && "open"}`}>
                <Link to={"/"}>INICIO</Link>
                <Link to={`/category/beer`}>CERVEZAS</Link>
                <Link to={`/category/food`}>PLATOS</Link>
                <Link to={`/category/Special`}>ESPECIALES</Link>
            </div>
            <div
                className={`navbar_toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="navbar_center_text">
                <Link to={"/"} className="navbar_title">
                    <h1>Piltriquitron</h1>
                    <h6>Food && Beer</h6>
                </Link>
            </div>
            <div className="navbar_cart_container">
                <Link to={"/cart"} className="navbar_cart">
                    <img src={cartLogo} alt="Logo de carrito en el NavBar" />
                    {cart.length > 0 ? <TotalCart /> : null}
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;

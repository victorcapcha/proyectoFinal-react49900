import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import CartTotal from "../CartTotal/CartTotal";
import "./CartContent.css";

const CartContent = () => {
    const { cart } = useContext(DataContext);
    return (
        <div className="cart_content">
            {cart.length > 0 ? (
                <h2 className="cart_content_title">
                    Su pedido es el siguiente:
                </h2>
            ) : null}
            <CartItem />
            <CartTotal />
            {cart.length > 0 ? (
                <div className="cart_button_container">
                    <Link to={"/"}>
                        <button type="button" className="cart_button">
                            Seguir Comprando
                        </button>
                    </Link>
                    <Link to={"/user"}>
                        <button type="button" className="cart_button">Terminar Compra</button>
                    </Link>
                </div>
            ) : null}
        </div>
    );
};
export default CartContent;

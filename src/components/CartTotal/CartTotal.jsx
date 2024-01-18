import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import "./CartTotal.css";

const CartTotal = () => {
    const { cart } = useContext(DataContext);
    const total = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
    return cart.length > 0 ? (
        <div className="cart_total">
            <h3>El total a pagar es: $ {total}</h3>
        </div>
    ) : (
        <div className="cart_total_empty">
            <h3>Aún no has armado tu pedido</h3>
            <Link to={"/"}>
                <button type="button" className="cart_total_button">Ir al menú</button>
            </Link>
        </div>
    );
};

export default CartTotal;

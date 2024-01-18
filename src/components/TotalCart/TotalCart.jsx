import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./TotalCart.css";

const TotalCart = () => {
    const { cart } = useContext(DataContext);

    const itemsQuanty = cart.reduce((acc, el) => acc + el.quantity, 0);
    return (
        <div>
            <span className="cart_item_total">{itemsQuanty}</span>
        </div>
    );
};

export default TotalCart;

import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./CartItem.css";
import CartPrices from "../CartPrices/CartPrices";

const CartItem = () => {
    const { cart } = useContext(DataContext);

    return cart.map((product) => {
        return (
            <div className="cart_content_item" key={product.id}>
                <img
                    className="cart_img_item"
                    src={product.img}
                    alt={product.category}
                />
                <div className="cart_item_stock_out">
                    <h3 className="cart_title_item">{product.name}</h3>
                    {product.quantity == product.stock ? (
                        <h3
                            className="cart_title_item"
                            style={{ color: "red" }}
                        >
                            Agotado
                        </h3>
                    ) : null}
                </div>
                <CartPrices product={product} />
            </div>
        );
    });
};

export default CartItem;

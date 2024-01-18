import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const CartPrices = ({ product }) => {
    const { cancelItems, addItems, remove } = useContext(DataContext);

    return (
        <div className="cart_sub_total_media">
            <div key={product.id} className="cart_counter_container">
                <span
                    onClick={() => cancelItems({ product })}
                    className="cart_counter_button"
                >
                    -
                </span>
                <span>{product.quantity}</span>
                <span
                    onClick={() => addItems({ product })}
                    className="cart_counter_button"
                >
                    +
                </span>
            </div>
            <div>
                <h4 className="cart_sub_title_item">Sub-total</h4>
                <h3 className="cart_sub_title_item">
                    {" "}
                    $ {product.price * product.quantity}
                </h3>
            </div>
            <div>
                <h4 className="cart_sub_title_item">Precio Unitario</h4>
                <h3 className="cart_sub_title_item">$ {product.price}</h3>
            </div>
            <div>
                <h4 className="cart_sub_title_item">Eliminar</h4>
                <h3 onClick={() => remove({ product })} className="cart_delete">
                    ❌
                </h3>
            </div>
        </div>
    );
};

export default CartPrices;

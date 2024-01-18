import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = () => {
    const { products, cart, setCart, setQuantity } = useContext(DataContext);

    return products.map((product) => {
        const add = (product) => {
            const itemRepeat = cart.find((item) => item.id === product.id);
            if (itemRepeat) {
                setCart(
                    cart.map((item) =>
                        item.id === product.id &&
                        product.quantity < product.stock
                            ? {
                                  ...product,
                                  quantity: (product.quantity += 1),
                              }
                            : item
                    )
                );
                setQuantity(product.quantity);
            } else {
                setCart([...cart, product]);
            }
        };

        const increment = () => {
            if (product.quantity < product.stock) {
                product.quantity += 1;
                setCart(
                    cart.map((item) =>
                        item.id === product.id
                            ? {
                                  ...product,
                                  quantity: product.quantity,
                              }
                            : item
                    )
                );
            }
        };

        const decrement = () => {
            if (product.quantity > 1) {
                product.quantity -= 1;
                setCart(
                    cart.map((item) =>
                        item.id === product.id
                            ? {
                                  ...product,
                                  quantity: product.quantity,
                              }
                            : item
                    )
                );
            }
        };

        return (
            <div
                key={product.id}
                className={product.stock === 0 ? "card out" : "card"}
            >
                <img
                    className="card_img"
                    src={product.img}
                    alt={product.category}
                />
                <h3 className="card_title">{product.name}</h3>
                <h4 className="card_sub_title">$ {product.price}</h4>
                <h5 className="card_stock">Stock: {product.stock}</h5>
                {product.quantity === product.stock ? (
                    <h5 style={{ color: "red" }} className="out">
                        STOCK AGOTADO{" "}
                    </h5>
                ) : null}
                <h6 className="card_quantity">Mínimo: {product.quantity}</h6>
                <button
                    type="button"
                    className="card_button"
                    onClick={() => decrement({ product })}
                >
                    -
                </button>
                <button 
                    type="button" 
                    className="card_button" 
                    onClick={() => add(product)}
                >
                    Lo quiero
                </button>
                <button
                    type="button"
                    className="card_button"
                    onClick={() => {
                        increment({ product });
                    }}
                >
                    +
                </button>
                <div>
                    <Link to={`/detail/${product.id}`} key={product.id}>
                        <button type="button" className="card_button">
                            Especificaciones
                        </button>
                    </Link>
                </div>
            </div>
        );
    });
};

export default Item;

import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "./ItemsCategory.css";

const ItemCategory = () => {
    const { setQuantity, cart, setCart } = useContext(DataContext);
    const [productCategory, setProductCategory] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const getProductCategory = async () => {
            const q = query(
                collection(db, "products"),
                where("category", "==", category)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProductCategory(docs);
        };
        getProductCategory();
    }, [category]);

    return productCategory.map((product) => {
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
                setQuantity((product.quantity += 1));
            }
            const itemRepeat = cart.find((item) => item.id === product.id);
            if (product.quantity > 1 && product.quantity < product.stock) {
                setCart(
                    cart.map((item) =>
                        item.id === product.id
                            ? {
                                  ...product,
                                  quantity: itemRepeat.quantity + 1,
                              }
                            : item
                    )
                );
            }
        };

        const decrement = () => {
            if (product.quantity > 1) {
                setQuantity((product.quantity -= 1));
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
                    onClick={() => decrement(product)}
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
                    onClick={() => increment(product)}
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

export default ItemCategory;

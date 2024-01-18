import { createContext } from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState();

    useEffect(() => {
        const getProducts = async () => {
            const q = query(collection(db, "products"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducts(docs);
        };
        getProducts();
    }, []);

    const increment = ({ product }) => {
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

    const decrement = ({ product }) => {
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
    const addItems = ({ product }) => {
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

    const cancelItems = ({ product }) => {
        if (product.quantity > 1) {
            setQuantity((product.quantity -= 1));
        }
    };

    /*REVISADA*/
    const remove = ({ product }) => {
        const foundItem = cart.find((item) => item.id === product.id);
        const newCart = cart.filter((item) => {
            return item !== foundItem;
        });
        setCart(newCart);
        foundItem.quantity = 1;
        setQuantity(product.quantity - foundItem.quantity);
    };

    return (
        <DataContext.Provider
            value={{
                increment,
                decrement,
                products,
                setProducts,
                cart,
                setCart,
                quantity,
                setQuantity,
                addItems,
                cancelItems,
                remove,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;

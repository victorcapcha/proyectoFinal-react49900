import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import "../Item/Item.css";

const ListItems = () => {
    const [loading, setLoading] = useState(true);
    const { cart } = useContext(DataContext);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div
                        style={{
                            border: "1px solid black",
                            borderRadius: "10px",
                        }}
                    >
                        {cart.length > 0 ? (
                            <Link
                                to={"/cart"}
                                style={{ color: "black", margin: "auto" }}
                            >
                                <h1>Ir a su pedido</h1>
                            </Link>
                        ) : null}
                    </div>
                    <div className="item_card_container">
                        <Item />
                    </div>
                </>
            )}
        </div>
    );
};

export default ListItems;

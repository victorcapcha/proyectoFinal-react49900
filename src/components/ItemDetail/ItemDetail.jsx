import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
    collection,
    query,
    getDocs,
    where,
    documentId,
} from "firebase/firestore";
import ViewBasic from "../ViewBasic/ViewBasic";
import "./ItemDetail.css";

const ItemDetail = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const q = query(
                collection(db, "products"),
                where(documentId(), "==", id)
            );
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProduct(docs);
        };
        getProduct();
    }, [id]);

    return product.map((product) => {
        return (
            <>
                <ViewBasic />
                <div key={product.id} className="item_card_container_detail">
                    <div className="mycard card_detail">
                        <img
                            className="card_detail_img"
                            src={product.img}
                            alt={product.category + product.name}
                        />
                        <div className="detail">
                            <h3 className="card_detail_title">
                                Variedad: {product.name}
                            </h3>
                            <h6 className="card_detail_quantity">
                                Stock: {product.stock}
                            </h6>
                            <p className="card_detail_description">
                                {product.description}
                            </p>
                            <Link to={"/"}>
                                <button type="button" className="card_button_detail">
                                    Volver
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    });
};

export default ItemDetail;

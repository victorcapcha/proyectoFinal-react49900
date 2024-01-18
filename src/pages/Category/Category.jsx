import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import ViewBasic from "../../components/ViewBasic/ViewBasic";
import ItemCategory from "../../components/ItemsCategory/ItemsCategory";

const Category = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            <ViewBasic />
            {loading ? (
                <div
                    style={{ display: "flex", height: "100vh", margin: "auto" }}
                >
                    <Spinner />
                </div>
            ) : (
                <div className="item_card_container_category">
                    <ItemCategory />
                </div>
            )}
        </div>
    );
};

export default Category;

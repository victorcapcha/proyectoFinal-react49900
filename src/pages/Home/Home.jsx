import Banner from "../../components/Banner/banner";
import ListItems from "../../components/ListItems/ListItems";
import ViewBasic from "../../components/ViewBasic/ViewBasic";

const Home = () => {
    return (
        <div>
            <ViewBasic />
            <Banner />
            <div className="item_card_container">
                <ListItems />
            </div>
        </div>
    );
};

export default Home;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import DataProvider from "./context/DataContext";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import UserBuy from "./pages/User/User";

function App() {
    return (
        <DataProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/detail/:id" element={<ItemDetail />}></Route>
                    <Route
                        path="/category/:category"
                        element={<Category />}
                    ></Route>
                    <Route path="/user" element={<UserBuy />}></Route>
                </Routes>
            </BrowserRouter>
        </DataProvider>
    );
}

export default App;

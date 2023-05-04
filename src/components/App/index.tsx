import { Route, Routes } from "react-router-dom";
import StoreContainer from "../../containers/StoreContainer";
import StoreProductsContainer from "../../containers/StoreProductsContainer";
import StoreHomeContainer from "../../containers/StoreHomeContainer";
import ProductDetailsContainer from "../ProductDetailsContainer";
import BasketContainer from "../../containers/BasketContainer";
import FavoriteContainer from "../../containers/FavoriteContainer";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StoreContainer />}>
        <Route index element={<StoreHomeContainer />} />
        <Route path="basket" element={<BasketContainer />} />
        <Route path="favorite" element={<FavoriteContainer />} />
        <Route path="category/:id" element={<StoreProductsContainer />} />
        <Route path="product/:id" element={<ProductDetailsContainer />} />
      </Route>
      {/* <Route
            path="admin"
            element={
                <RouterProtector>
                    <AdminLayout />
                </RouterProtector>
            }
        >
            <Route index element={<AdminHome />} />
            <Route path="orders" element={<AdminSiderTableContainer />} />
            <Route path="products" element={<AdminSiderTableContainer />} />
            <Route path="categories" element={<AdminSiderTableContainer />} />
            <Route path="brands" element={<AdminSiderTableContainer />} />
        </Route> */}
    </Routes>
  );
};

export default App;

import { Route, Routes } from "react-router-dom";
import StorePageContainer from "../../containers/store/StorePageContainer";
import StoreCategories from "../store/StoreCategories";
import StoreHome from "../store/StoreHome";
import ProductDetailsContainer from "../store/ProductDetailsContainer";
import BasketContainer from "../../containers/store/BasketContainer";
import FavoriteContainer from "../../containers/store/FavoriteContainer";
import AdminPageContainer from "../../containers/admin/AdminPageContainer";
import AdminSiderTableBrandsContainer from "../../containers/admin/AdminSiderTableBrandsContainer";
import AdminSiderTableCategoriesContainer from "../../containers/admin/AdminSiderTableCategoriesContainer";
import AdminSiderTableProductsContainer from "../../containers/admin/AdminSiderTableProductsContainer";
import AdminSiderTableOrdersContainer from "../../containers/admin/AdminSiderTableOrdersContainer";

const RouteProtector: any = ({ children }: any): any => {
  const token: any = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return null;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StorePageContainer />}>
        <Route index element={<StoreHome />} />
        <Route path="category/:id" element={<StoreCategories />} />
        <Route path="favorite" element={<FavoriteContainer />} />
        <Route path="basket" element={<BasketContainer />} />
        <Route path="product/:id" element={<ProductDetailsContainer />} />
      </Route>
      <Route
        path="admin"
        element={
          <RouteProtector>
            <AdminPageContainer />
          </RouteProtector>
        }
      >
        <Route path="orders" element={<AdminSiderTableOrdersContainer />} />
        <Route path="products" element={<AdminSiderTableProductsContainer />} />
        <Route
          path="categories"
          element={<AdminSiderTableCategoriesContainer />}
        />
        <Route path="brands" element={<AdminSiderTableBrandsContainer />} />
      </Route>
    </Routes>
  );
};

export default App;

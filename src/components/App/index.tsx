import { Route, Routes } from "react-router-dom";
import StorePageContainer from "../../containers/StorePageContainer";
import StoreCategories from "../StoreCategories";
import StoreHome from "../StoreHome";
import ProductDetailsContainer from "../ProductDetailsContainer";
import BasketContainer from "../../containers/BasketContainer";
import FavoriteContainer from "../../containers/FavoriteContainer";
import AdminPageContainer from "../../containers/AdminPageContainer";
import AdminSiderTableContainer from "../../containers/AdminSiderTabContainer";

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
        <Route path="product" element={<ProductDetailsContainer />} />
      </Route>
      <Route
        path="admin"
        element={
          // <RouteProtector>
          <AdminPageContainer />
          // </RouteProtector>
        }
      >
        <Route path="products" element={<AdminSiderTableContainer />} />
        <Route path="categories" element={<AdminSiderTableContainer />} />
        <Route path="brands" element={<AdminSiderTableContainer />} />
      </Route>
    </Routes>
  );
};

export default App;

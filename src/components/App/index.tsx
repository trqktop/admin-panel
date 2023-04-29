import { Route, Routes } from "react-router-dom";
import HomeContainer from "../../containers/HomeContainer";
import ProductsContainer from "../../containers/ProductsContainer";
import StoreLayout from "../../containers/StoreLayoutContainer";
import "../../data/index";
import AdminLayout from "../../containers/AdminLayoutContainer";
import AdminHome from "../AdminHome";
import AdminSiderItem from "../AdminSiderItem";
const RouterProtector = ({ children }: any) => {
  const token = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return null;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<StoreLayout />}>
        <Route index element={<HomeContainer />} />
        <Route path="products/:id" element={<ProductsContainer />} />
      </Route>
      <Route
        path="admin"
        element={
          <RouterProtector>
            <AdminLayout />
          </RouterProtector>
        }
      >
        <Route index element={<AdminHome />} />
        <Route path="orders" element={<AdminSiderItem />} />
        <Route path="products" element={<AdminSiderItem />} />
        <Route path="categories" element={<AdminSiderItem />} />
        <Route path="brands" element={<AdminSiderItem />} />
      </Route>
    </Routes>
  );
};

export default App;

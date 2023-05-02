import { Route, Routes } from "react-router-dom";
import StoreContainer from "../../containers/StoreContainer";

const App: React.FC = () => {
    return <Routes>
        <Route path="/" element={<StoreContainer />}>
            {/* <Route index element={<HomeContainer />} /> */}
            {/* <Route path="products/:id" element={<ProductsContainer />} /> */}
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
}

export default App
import React, { useMemo, createContext } from "react";
import styles from "./App.module.scss";
import LoginFormContainer from "../../containers/LoginFormContainer";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminPageContainer from "../../containers/AdminPageContainer";
import OrdersContainer from "../../containers/OrdersContainer";
import ProductsContainer from "../../containers/ProductsContainer";



const ProtectedRoute: any = ({
  redirectPath = "/",
  children,
}: any): any => {
  const token: any = localStorage.getItem("token");
  if (token) {
    return children;
  }
  return <Navigate to={redirectPath} replace />;
};

const App: React.FunctionComponent = () => {

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<LoginFormContainer />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminPageContainer />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<ProductsContainer />} />
          <Route path="products" element={<ProductsContainer />} />
          <Route path="orders" element={<ProductsContainer />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

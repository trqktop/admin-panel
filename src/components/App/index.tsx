import React, { useMemo, createContext } from "react";
import styles from "./App.module.scss";
import LoginFormContainer from "../../containers/LoginFormContainer";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminPageContainer from "../../containers/AdminPageContainer";
import OrdersContainer from "../../containers/OrdersContainer";

const ProtectedRoute: any = ({
  redirectPath = "/",
  children,
}: any): any => {
  const user: any = localStorage.getItem("user");

  if (user?.length) {
    const { success, data } = JSON.parse(user);
    if (success && data.user.tokken) {
      return children;
    }
  }
  return <Navigate to={redirectPath} replace />;
};

const App: React.FunctionComponent = () => {

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<LoginFormContainer />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminPageContainer />
            </ProtectedRoute>
          }
        >
          <Route>
            <Route path=":orders" element={<OrdersContainer />} />
            <Route path=":products" element={<OrdersContainer />} />
            <Route path=":setting" element={<OrdersContainer />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import StoreContext from "./store";
import { BrowserRouter } from "react-router-dom";
import { theme } from "antd";
import { ConfigProvider } from "antd";


const themeConfig = {
  algorithm: theme.compactAlgorithm,
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <StoreContext>
      <ConfigProvider theme={themeConfig}>
        <App />
      </ConfigProvider>
    </StoreContext>
  </BrowserRouter>
);

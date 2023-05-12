import { Pagination, Spin } from "antd";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ProductList from "../ProductList";
import styles from "./StoreHomeContainer.module.scss";
import Service from "../../../service";
import { useOutletContext } from "react-router-dom";
import { AppStoreState } from "../../../containers/store/StorePageContainer";

type Context = {
  state: AppStoreState
}

const StoreHome = () => {
  const { state }: Context = useOutletContext();

  return (
    <div className={styles.container}>
      <ProductList
        products={state.products}
        render={(product: any, index: number) => (
          <li key={index}>
            {state.products.isLoaded ? <ProductCard product={product} /> : <Spin />}
          </li>
        )}
      />
    </div >
  );

};
export default StoreHome;

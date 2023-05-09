import { Pagination, Spin } from "antd";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import ProductList from "../ProductList";
import styles from "./StoreHomeContainer.module.scss";
import Service from "../../service";
import { useOutletContext } from "react-router-dom";

const StoreHome = () => {
  const { state }: any = useOutletContext();

  return (
    <div className={styles.container}>
      <ProductList
        products={state.products}
        render={(product: any, index: number) => (
          <li key={index}>
            {state.isProductsLoading ? <Spin /> : <ProductCard product={product} />}
          </li>
        )}
      />
    </div >
  );

};
export default StoreHome;

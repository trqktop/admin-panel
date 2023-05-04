import { Spin } from "antd";
import { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import { Context } from "../../store";
import ProductList from "../../components/ProductList";
import styles from "./StoreHomeContainer.module.scss";
import { useOutletContext } from "react-router-dom";

const StoreHomeContainer = () => {
  const { store, events } = useContext(Context);
  const [{ brandFilter }]: any = useOutletContext();
  if (events.success) {
    const productsWithBrandFilter = (products: any) => {
      const result = products.filter((prod: any) => {
        return brandFilter.some((brand: any) => brand === prod.brand_id);
      });
      return result;
    };

    const products = brandFilter.length
      ? productsWithBrandFilter(store.products.data!)
      : store.products.data!;

    return (
      <div className={styles.container}>
        <ProductList
          products={products}
          render={(product: any, index: number) => (
            <li key={index}>
              <ProductCard product={product} />
            </li>
          )}
        />
      </div>
    );
  } else {
    return <Spin></Spin>;
  }
};
export default StoreHomeContainer;

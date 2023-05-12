import { useContext } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";

import ProductQuantityControlPanel from "../ProductQuantityControlPanel";
import { Spin, Typography } from "antd";
import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const params = useParams();
  const { state }: any = useOutletContext()
  const product = state.products.items.find((item: any) => item.id === Number(params.id))
  if (product)
    return (
      <div className={styles.container}>
        <div className={styles.itemDetailsContianer}>
          <div>
            <h1>category</h1>
            <div className={styles.description}>{product.category.name}</div>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
          </div>
          <div className={styles.aboutContainer}>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={product.price}>12 &thinsp;₽</div>
            <ProductQuantityControlPanel product={product} isBasketLink />
            <div>
              <h1>О товаре</h1>
              <div className={styles.description}>{product.description}</div>
            </div>
            <div>
              <h1>Brand</h1>
              <div className={styles.description}>{product.brand.name}</div>
            </div>
          </div>
        </div>
      </div>
    );

  return null
  // return <Spin />;
};
export default ProductDetails;

import { useContext } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { Context } from "../../store";
import ProductQuantityControlPanel from "../ProductQuantityControlPanel";
import { Spin, Typography } from "antd";
import styles from "./ProductDetailsContainer.module.scss";

const ProductDetailsContainer = () => {
  const params = useParams();
  const { state }: any = useOutletContext()

  // const {
  //   store: { products },
  // } = useContext(Context);

  // if (products.events.success) {
  //   const data: any = products.data!;
  //   const product = data.find((item: any) => String(item.id) === params.id);
  if (state.selectedProduct)
    return (
      <div className={styles.container}>
        <div className={styles.itemDetailsContianer}>
          <div className={styles.imageContainer}>
            <img
              src={state.selectedProduct.image}
              alt={state.selectedProduct.name}
              className={styles.image}
            />
          </div>

          <div className={styles.aboutContainer}>
            <h1 className={styles.name}>{state.selectedProduct.name}</h1>
            <div className={styles.price}>12 &thinsp;₽</div>
            <ProductQuantityControlPanel product={state.selectedProduct} isBasketLink />
            <div>
              <h1>О товаре</h1>
              <div className={styles.description}>{state.selectedProduct.description}</div>
            </div>
          </div>
        </div>
      </div>
    );

  return null

  // return <Spin />;
};
export default ProductDetailsContainer;

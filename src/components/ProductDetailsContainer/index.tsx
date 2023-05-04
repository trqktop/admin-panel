import { useContext } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Context } from "../../store";
import ProductQuantityControllPanel from "../ProductQuantityControllPanel";
import { Spin, Typography } from "antd";
import styles from "./ProductDetailsContainer.module.scss";

const ProductDetailsContainer = () => {
  const params = useParams();
  const {
    store: { products },
  } = useContext(Context);
  const [state]: any = useOutletContext();

  if (products.events.success) {
    const data: any = products.data!;
    const product = data.find((item: any) => String(item.id) === params.id);

    const isToggle = state.basketList.some(
      (item: any) => item.id === product.id
    );

    const findQuantity = () =>
      state.basketList.find((item: any) => item.id === product.id).quantity;
    console.log(product);
    return (
      <div className={styles.container}>
        <div className={styles.itemDetailsContianer}>
          <div className={styles.imageContainer}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.image}
            />
          </div>

          <div className={styles.aboutContainer}>
            <h1 className={styles.name}>{product.name}</h1>
            <div className={styles.price}>12 &thinsp;₽</div>
            <ProductQuantityControllPanel product={product} />
            <div>
              <h1>О товаре</h1>
              <div className={styles.desciption}>{product.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <Spin />;
};
export default ProductDetailsContainer;

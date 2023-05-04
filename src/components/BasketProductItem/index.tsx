import ProductQuantityControllPanel from "../ProductQuantityControllPanel";
import styles from "./BasketProductItem.module.scss";
const BasketProductItem = ({ product }: any) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={product.image} alt={product.name} />
      <div className={styles.about}>
        <div className={styles.textContianer}>
          <h1 className={styles.name}>{product.name}</h1>
          <div className={styles.price}>{product.price}&thinsp;₽</div>
        </div>
        <ProductQuantityControllPanel product={product} />
      </div>
    </div>
  );
};

export default BasketProductItem;

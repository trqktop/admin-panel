import { useOutletContext } from "react-router-dom";
import OrderForm from "../../components/OrderForm";
import styles from "./BasketContainer.module.scss";
import BasketProductItem from "../../components/BasketProductItem";

const BasketContainer = () => {
  const [state]: any = useOutletContext();
  const { basketList } = state;

  if (basketList.length) {
    const products = basketList;
    const totalSumm = products.reduce(
      (prev: any, curr: any) => prev + curr.quantity * curr.price,
      0
    );
    const totalQuantity = products.reduce(
      (prev: any, curr: any) => prev + curr.quantity,
      0
    );

    const renderItems = products.map((product: any, index: number) => (
      <li key={index} className={styles.item}>
        <BasketProductItem product={product} />
      </li>
    ));

    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <ul className={styles.itemsContainer}>{renderItems}</ul>
          <div className={styles.totalInfoContainer}>
            <div className={styles.totalSumm}>Итого : {totalSumm}&thinsp;₽</div>
            <div className={styles.totalQuantity}>
              Всего товара : {totalQuantity}шт
            </div>
          </div>
        </div>
        <OrderForm products={products} />
      </div>
    );
  }

  return (
    <div>
      <h1>КОРЗИНА</h1>
      <h1>В корзине пока пусто</h1>
    </div>
  );
};

export default BasketContainer;

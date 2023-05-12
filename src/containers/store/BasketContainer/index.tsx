import { useNavigate, useOutletContext } from "react-router-dom";
import OrderForm from "../../../components/store/OrderForm";
import styles from "./BasketContainer.module.scss";
import BasketProductItem from "../../../components/store/BasketProductItem";
import { Button, Modal } from "antd";
import { useState } from "react";
import { ProductType } from "../../../types";
import Service from "../../../service";

type OrderProduct = {
  id: number;
  quantity: number;
  price: number;
};

type OrderType = {
  customer: FormData;
  products: OrderProduct[];
  summ: number;
};

const BasketContainer = () => {
  const { state, clearBasketList }: any = useOutletContext();
  const { basketList } = state;
  const [isOpen, setOpen] = useState(false);

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

    const openModalHandler = () => {
      setOpen(true);
    };

    const closeModalHandler = () => {
      setOpen(false);
    };

    // const orders = {
    //   1: {
    //     id: 1,
    //     userId: 1,
    //     products: [
    //       { productId: 1, quantity: 2 },
    //       { productId: 2, quantity: 1 },
    //     ],
    //     date: "12.12.2222",
    //     totalCost: "1600",
    //   },
    //   2: {
    //     id: 2,
    //     userId: 2,
    //     products: [
    //       { productId: 2, quantity: 1 },
    //       { productId: 1, quantity: 1 },
    //     ],
    //     date: "24.02.2111",
    //     totalCost: "1600",
    //   },
    //   3: {
    //     id: 3,
    //     userId: 1,
    //     products: [{ productId: 3, quantity: 1 }],
    //     date: "24.02.2111",
    //     totalCost: "1600",
    //   },
    // };

    const orderFormater = (customer: FormData, products: any): OrderType => {
      return {
        customer,
        products: products.map(({ id, quantity, price }: any) => ({
          id,
          quantity,
          price,
        })),
        summ: totalSumm,
      };
    };

    const submitOrder = async (customer: FormData, products: any) => {
      const service = new Service();
      const order = orderFormater(customer, products);
      service.options({ url: "order" });
      service.post(order);
      setOpen(false);
      clearBasketList();
    };

    return (
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <ul className={styles.itemsContainer}>{renderItems}</ul>
          <div className={styles.totalInfoContainer}>
            <div className={styles.totalSumm}>Итого : {totalSumm}&thinsp;₽</div>
            <div className={styles.totalQuantity}>
              Всего товара : {totalQuantity}шт
            </div>
            <Button
              type="primary"
              style={{ maxWidth: "fit-content" }}
              onClick={openModalHandler}
            >
              Перейти к оформлению
            </Button>
          </div>
        </div>
        <Modal onCancel={closeModalHandler} open={isOpen} footer={[]}>
          <OrderForm products={products} submitOrder={submitOrder} />
        </Modal>
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

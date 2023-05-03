import { Card, Image, Layout, List } from "antd";
import Meta from "antd/es/card/Meta";
import { useOutletContext } from "react-router-dom";
import ProductQuantityControllPanel from "../../components/ProductQuantityControllPanel";
import { Form, Input, Button } from "antd";
import OrderForm from "../../components/OrderForm";
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

    return (
      <div>
        <div>
          <Layout
            style={{
              display: "flex",
              minWidth: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <List
              style={{ maxWidth: "100%" }}
              dataSource={products}
              grid={{ gutter: 16 }}
              renderItem={(item: any) => (
                <List.Item>
                  <Card
                    style={{ width: 240 }}
                    actions={[<ProductQuantityControllPanel product={item} />]}
                    cover={<img alt={item.name} src={item.image} />}
                  >
                    <Meta
                      title={
                        <ul>
                          <li>{item.name}</li>
                          <li>{item.price * item.quantity} $</li>
                        </ul>
                      }
                      description="www.instagram.com"
                    />
                  </Card>
                </List.Item>
              )}
            />
            <div
              style={{
                display: "flex",
                border: "1px red solid",
                width: "400px",
                gap: 10,
              }}
            >
              <div>итого : {totalSumm}</div>
              <div>всего товара : {totalQuantity}</div>
            </div>
          </Layout>
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

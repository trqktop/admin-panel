import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Layout, Space, Spin } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useContext } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Context } from "../../store";
import ProductQuantityControllPanel from "../ProductQuantityControllPanel";

const ProductPage = () => {
  const params = useParams();
  const {
    store: { products },
  } = useContext(Context);
  const [
    state,
    ,
    basketListHandler,
    addItemToBacketListHandler,
    removeItemFromBacketListHandler,
  ]: any = useOutletContext();

  if (products.events.success) {
    const data: any = products.data!;
    const product = data.find((item: any) => String(item.id) === params.id);

    const isToggle = state.basketList.some(
      (item: any) => item.id === product.id
    );

    const findQuantity = () =>
      state.basketList.find((item: any) => item.id === product.id).quantity;

    return (
      <Layout>
        <Layout>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "300px" }}
          />
          <ul>
            <li>{product.name}</li>
            <li>{product.price}</li>
            <li>{product.description}</li>
          </ul>
        </Layout>
        {/* <ButtonGroup>
          {isToggle ? (
            <>
              <Button onClick={() => removeItemFromBacketListHandler(product)}>
                <MinusOutlined />
              </Button>
              <Button onClick={() => addItemToBacketListHandler(product)}>
                <PlusOutlined />
              </Button>
              <Space>{findQuantity()}</Space>
            </>
          ) : (
            <Button onClick={(e) => basketListHandler(e, product)}>
              Добавить корзину
            </Button>
          )}
        </ButtonGroup> */}
        <ProductQuantityControllPanel product={product} />
      </Layout>
    );
  }
  return <Spin />;
};
export default ProductPage;

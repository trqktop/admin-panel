import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { Link, useOutletContext } from "react-router-dom";

const ProductQuantityControlPanel = ({ product, isBasketLink }: any) => {
  const { state, basketListHandler,
    addItemToBasketListHandler,
    removeItemFromBasketListHandler }: any = useOutletContext()



  const isToggle = state.basketList.some((item: any) => item.id === product.id);
  const findQuantity = () =>
    state.basketList.find((item: any) => item.id === product.id).quantity;

  return (
    <ButtonGroup>
      {isToggle ? (
        <>
          <Button
            type="primary"
            onClick={() => removeItemFromBasketListHandler(product)}
          >
            <MinusOutlined />
          </Button>
          <Space size="large">
            <span style={{ padding: "10px", fontSize: "20px" }}>
              {findQuantity()}
            </span>
          </Space>
          <Button
            type="primary"
            onClick={() => addItemToBasketListHandler(product)}
          >
            <PlusOutlined />
          </Button>
        </>
      ) : (
        <Button type="primary" onClick={(e) => basketListHandler(e, product)}>
          Добавить корзину
        </Button>
      )}
      {isToggle && isBasketLink ? (
        <Link to="/basket">
          <Button type="primary">Перейти к корзине</Button>
        </Link>
      ) : null}
    </ButtonGroup>
  );
};

export default ProductQuantityControlPanel;
